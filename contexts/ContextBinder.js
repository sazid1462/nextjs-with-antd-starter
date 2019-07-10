export const ContextBinder = (context, actions) => {
    const [state, dispatch] = context;

    const boundContext = {
        ...state,
        dispatch: dispatch
    };

    Object.values(actions).forEach((action) => {
        boundContext[action.name] = async (...args) => {
            action.apply(null, [dispatch, ...args])
        }
    });

    return boundContext;
};
