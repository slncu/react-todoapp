
export default class Server {
  constructor() {
    this.milkcocoa = MilkCocoa.connectWithApiKey('eggj90k0fhz.mlkcca.com', 'PEJPEBHFAGGMKBBE', 'agXlZNRYaIYOJSSOJATmMMZCeJggkWYeCRQWSfFK');
    this.todosDataStore = this.milkcocoa.dataStore('todos');
  }

  getTodoList() {
    this.todosDataStore.stream().next((err, data) => {
      console.log(data);
      return data;
    });
  }

  pushTodoList(props) {
    //todosDataStore.push()
  }

}
