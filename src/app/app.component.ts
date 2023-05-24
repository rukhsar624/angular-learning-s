import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-S';
  searchItem:any='';
  groceryItems=[
    {sno:1  , name: 'Vegetable'        ,  prices:'$ 700'  ,  availability:  'Available'     },
    {sno:2  , name: 'Rice'             ,  prices:'$ 400'  ,  availability:  'Available'     },
    {sno:3  , name: 'Frozen Vegetable' ,  prices:'$ 100'  ,  availability:  'Not Available' },
    {sno:4  , name: 'Bread'            ,  prices:'$ 100'  ,  availability:  'Available'     },
    {sno:5  , name: 'Vegetable'        ,  prices:'$ 700'  ,  availability:  'Not Available' },
    {sno:6  , name: 'Fruit'            ,  prices:'$ 500'  ,  availability:  'Available'     },
    {sno:7  , name: 'Dried Fruit'      ,  prices:'$ 700'  ,  availability:  'Available'     },
    {sno:8  , name: 'Milk'             ,  prices:'$ 200'  ,  availability:  'Available'     },
    {sno:7  , name: 'Flour'            ,  prices:'$ 900'  ,  availability:  'Available'     },
    {sno:9  , name: 'Yogurt'           ,  prices:'$ 50'   ,  availability:  'Available'     },
    {sno:10 , name: 'Pasta'            ,  prices:'$ 550'  ,  availability:  'Available'     },
    {sno:11 , name: 'Meat'             ,  prices:'$ 50'   ,  availability:  'Available'     },
    {sno:12 , name: 'Eggs'             ,  prices:'$ 50'   ,  availability:  'Not Available' },
    {sno:13 , name: 'Sea Food'         ,  prices:'$ 50'   ,  availability:  'Not Available' },
    {sno:14 , name: 'Cheese'           ,  prices:'$ 150'  ,  availability:  'Not Available' },
    {sno:15 , name: 'Sugar'            ,  prices:'$ 750'  ,  availability:  'Available'     },
    {sno:16 , name: 'Tea'              ,  prices:'$ 450'  ,  availability:  'Available'     },
    {sno:17 , name: 'Raw spice'        ,  prices:'$ 350'  ,  availability:  'Available'     },
    {sno:18 , name: 'Drinks'           ,  prices:'$ 250'  ,  availability:  'Available'     },
    {sno:19 , name: 'Canned Beans'     ,  prices:'$ 150'  ,  availability:  'Available'     },
    {sno:20 , name: 'Breakfast Cereal' ,  prices:'$ 150'  ,  availability:  'Available'     },
  ]  
}
