import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    loading: true,
    cards: [],
    archetypes: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiArchetypesUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});