module.exports = {
    Query: {

        people: (_, args, { dataSources }) => dataSources.peopleAPI.getAllPeople(args?.page),
        person: (_, args, { dataSources }) => dataSources.peopleAPI.getPerson(args.name),
    },
};