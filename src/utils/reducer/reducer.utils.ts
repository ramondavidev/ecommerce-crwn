import { AnyAction } from 'redux';

// this action is the return type of the action creator
type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>
}

// actionCreator that has no parameters
export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>

// actionCreator that has parameters
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

// the matcher function takes some actionCreator function and check if the passed type has the same type of the
// corresponding action that was created
export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    })
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

// if create Action gets called with a type and a payload, the return type of this function will be ActionWithPayload
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// if create Action gets called with just a type, the return type of this function will be Action
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}

// export const createAction = (type, payload) => ({ type, payload });