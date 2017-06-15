import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryData implements InMemoryDbService {
  createDb() {
    let PARTNERS =[
      {
        id: 1702,
        name: 'ChildFund International',
        url: "http://www.childfund.org",
        des: "Helping deprived, excluded and vulnerable children have the capacity to become young adults and leaders who bring lasting and positive change to their communities."
      },
      {
        id: 3005,
        name: 'EcoHealth Alliance',
        url:"http://www.ecohealthalliance.org",
        des:"EcoHealth Alliance leads cutting-edge research into the critical connections between human and wildlife health and delicate ecosystems."
      },
      {id: 4289,
        name:'Global Fund for Children',
        url:"http://www.globalfundforchildren.org",
        des:"We transform the lives of the world's most vulnerable children by finding, funding, and strengthening grassroots organizations dedicated to helping children grow, learn, and thrive."
      },
      {
        id: 2175,
        name:'Habitat for Humanity',
        url:"http://www.habitat.org",
        des:"Habitat for Humanity builds strength, stability and self-reliance through shelter"
      },
      {
        id: 1105,
        name:'Partners In Health',
        url:"http://www.pih.org",
        des:"Our mission is to provide a preferential option for the poor in health care."
      },
      {
        id: 1874,
        name:'Save the Children',
        url:"http://www.savethechildren.org",
        des:"Our mission is to inspire breakthroughs in the way the world treats children, and to achieve immediate and lasting change in their lives."
      },
      {
        id: 6219,
        name:'Water For People',
        url:"http://www.waterforpeople.org",
        des:"An international organization that supports the development of sustainable drinking water resources, sanitation facilities, and hygiene education programs in developing countries."
      }
    ];
    return{PARTNERS};

  }
}

