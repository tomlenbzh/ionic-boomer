import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  rooms = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgKWaWvMfgSmQjJBETlectexGQ4qM_Yf4eiP44iWKUqBASfGvUA',
      difficulty: 'Easy',
      description: 'Room n°1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYL8Bhl0za6lNIT2fmv34wjtVTPqz3_939uoYVfDxhtfCujE12oA',
      difficulty: 'Medium',
      description: 'Room n°2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUm66xx14M60liBO9eEj4mxHuW0IZO6oIZullthAXU851bkdR',
      difficulty: 'Hard',
      description: 'Room n°3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      image: 'https://www.larousse.fr/encyclopedie/data/images/1314661-Pays_basque.jpg',
      difficulty: 'Evil',
      description: 'Room n°4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit.'

    }
  ];

  ngOnInit() {
  }

}
