export const UserApi = {
    registerUser: ({name, login, password}) => Promise.resolve({name, role: 'user'}),
    loginUser: ({login, password}) => Promise.resolve({name: 'Mikhail', role: 'admin'})
};
