
Angular:
--------

    Angular is a framework to build single page applications(SPA).

    Framework: Combination of languages, scripts, libraries, packages
    ----------
        HTML
        CSS
        TypeScript
        RxJS
        Zone.js

Setup:
------
    1) download and install nodejs

        check   node -v
                npm -v

    2) install angular with npm

        npm install -g @angular/cli@15

        check ng version

    3) create new project

        ng new my-app

    4) start the server 

        ng serve

    ***) Allow script running permision
        1) open powershell as administrator
        2) run command
            set-executionPolicy unrestricted

Project Flow Diagram:
=====================



Angular concepts:
=================


ROUTING:
========

    Angular is SPA, routing helps us to navigate from one view to another view.

    Where:  app-routing.module.ts -> routes array

    Types of routes: 4
    ----------------

        1) General Route:
        -----------------
            {path:'login', component: LoginComponent}

        2) Children Route:
        ------------------
            {path:'dashboard', component:DashComp, children:[
                {path:'home', compoent:HomeComponent}
            ]}
        
        3) Empty Route:
        ---------------
            {path:'', component: LoginComponent}

        4) Wildcard Route:
        ------------------
            {path:'**', component: PageNotFoundComponent}



        Navigate the routes:
        ---------------------

        1) From HTML:
        -------------

        <h1 routerLink="/dashboard">login</h1>
        




POSTMAN: API testing tool
--------

ALL possible api calls:
-----------------------

1) all         get         get(url)

2) specific    get         get(url/id)

3) filtering   get         get(url?filter=red)

4) pagination  get         get(url?limit=10&page=2)

5) sorting     get         get(url?sortBy=color&order=asc)

6) create      post        post(url,data)

7) update      put         put(url/id, data)

8) delete      delete      delete(url/id)



RxJS: Responsible for all async operations in angular.
-----

    it has 3 featuers

        1) promise
        2) observable
        3) subject

    
                       Promise                     observable
                    -----------------          ----------------
1) callback            single                       multiple
2) stop in between     connot                        can


                    observalbe                   subject
                    ---------                    ---------
1)                 unicasting                   multicasting
2)                 maintains state              won't maintain state


service:
--------

    we use service in two synarios

    1) when logic is not related to view
    2) when same logic is requried across multiple components


API Integration:
----------------

1) import HttpClientModule 
    import { HttpClientModule } from '@angular/common/http';

2) it contains HttpClient service
   inject HttpClient service in carsService

3) It contains get,post,put,delete
   chose one mehtod and do api call

   getCars():Observable<any>{
        this._httpClient.get("XXXXXXXX");
   }

4) subscribe to the getCars method from ts file.

    based on the result data, error call back functions will call.

    _carsService.getCars().subscribe(
        (data:any)=>{

        },
        (err:any)=>{

        }
    )


5) Display the data in html.

1) FormGroup
2) Nested FormGroup
3) FormArrays
4) Dynamic forms
5) Form Validations
6) Custom Validators

{
    model:'',
    color:'',
    address:{
        pin:123,
        city:'hyd'
    },
    comments:[
        {
            time:'',
            message:''
        }
    ]
}


{
    name: 'XXXXXX',
    experience: 3,
    experience: {
        company: 'TCS',
        experience: 3,
        pacakge: 10
    },
    skills:[
        {
            name: 'Angular',
            rating: 4,
            experience: 3
        },
        {
            name: 'HTML',
            rating: 5,
            experience: 3
        }
    ]    
}


GIT:
----
1) Connect laptop with github website

    git config --global user.name  "XXXXXXXX"
    git config --global user.email "XXXXXXXX"

2) Connect project to repository

    git init
    git remote add origin URL

3) Push changes

    git add .
    git commit -m "XXXXX"
    git push