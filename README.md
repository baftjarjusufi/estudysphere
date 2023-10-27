
# EstudySphere Capstone Project

The aim of the project is to develop an online "e-learning platform" called eStudySphere. The project was developed with a focus on distributed client server computing technology.
 Estudysphere is a web application created using the Django framework for backend development  , and  it incorporates a responsive frontend with HTML , CSS ,bootstrap and JavaScript. 
The platform is designed to offer users , visitors an interactive and collaborative a virtual learning environment.
 A key feature of the eStudySphere project is its emphasis on nurturing localized learning communities. Users can access this web application within their friends' circle, enabling them to create private study rooms and invite other colleagues to join.




## Authors

- [@baftjarjusufi](https://www.github.com/baftjarjusufi)


## Deployment

•The project repository can be cloned from the GitHub link provided  : https://github.com/baftjarjusufi/estudysphere.git

•	Alternatively, the Zip folder can be downloaded from the same link and extracted to a preferred location.
•	Once the user opens Visual Studio Code, they should navigate to the folder where the estudysphere project is located.
•	A new terminal (preferably a Shell) should be opened, and the user can proceed to execute the following commands.
•	It is important to always verify that the correct path is being used : “PS C:\Users\User\Desktop\estudysphere>”
As this project was developed within a virtual environment, the user will also need to create their own virtual environment.
1.	python -m venv env 

replace env if the user wants with a different name .

2.	env\scripts\activate – then user should activate their virtual environment , user should see : “(env) PS C:\Users\User \Desktop\estudysphere>”

•	Once the virtual environment is created , dependencies can be installed.
3.	pip install -r path/to/requirements.txt


•	The user is now almost done, they just need to perform the migration and open the live server.
4.	python manage.py migrate
5.	python manage.py runserver

•	The user can access the estudysphere application by visiting http://127.0.0.1:8000/ 




## Features

Visitor Feature’s (Front End):

- Responsive Template , Mobile Friendly: The web application is designed to ensure responsive layout design that will adapt different screen sizes and devices, providing an effortless experience for users both on desktop and mobile devices.

- Easy to use : The front-end interface is a user-friendly , making it easy to use for visitors to navigate through the application , access features , and interact with the system effortless.
- User Registration and Login form : Users can sign up for a new account by providing the required information about them , and securely login in whenever they want using their private credentials.
- Study room browsing: Users can browse and explore the number of various study rooms available in the application. They also can view the list of study rooms, search for a specific room with a name.
- Room Details and Joining: Users can view detailed information about each room, including room name and other relevant description.
- Real-time Room Updates: Users can receive real-time updates within the study rooms they have interest.
- Creating , Modifying Rooms : Visitors have the ability to create new study rooms, providing room names. They can also modify or edit existing study rooms they have created, allowing them to manage and customize their own study spaces.
- User Profile : Visitors have access to their user profile, where they can view and update their personal information. This feature allows visitors to maintain their profile within the application and manage their account settings.
- Writing Messages in the Room Topics: Visitors can actively participate in study room topics by writing and posting messages within the room topics. 
- Create , Update Topic: Visitors have the ability to create new topics within the study rooms or update existing topics. This feature allows visitors to initiate new discussions or modify existing topics based on their study interests and needs.
- Check who joined a Topic in the Room: Users can see the list of participants who have joined a specific topic within a study room. This feature enables visitors to know who else is interested in the topic and facilitates interaction among participants.


Admin Feature’s (Administration Section):

- Manage CRUD Rooms : Allows the Admin to create, read, update, and delete study rooms within the system application.
- Manage CRUD Topics: The admin has the ability to crud topics in the web app.
- Manage CRUD Users: The admin has the power to crud operations on user accounts.
- Enable or Disable Users: This feature allows the admin to control user access and manage user privileges.
- Manage Website Pages: The admin can manage the content and structure of the website pages. 
- Update Website : The admin can make updates and modifications to the website design, layout, and overall user interface. 
- Admin dashboard: The admin has access to a dedicated dashboard that provides an overview of system activities, user statistics, and study room analytics. This centralizes important information for efficient monitoring and management.
- User roles and Permissions: Admin can assign different roles and permissions to users within the system.
- System Configuration: The admin has the ability to configure system settings, such as application preferences and security parameters. 

![Logo](https://i.imgur.com/JNKYKqk.png)


## Technologies Used

**Client:** Python, Django, HTML, CSS, Bootstrap , Javascript , Cypress 

**Server:** Node, Hukaru


## Support

For support, email baftjarjj@gmail.com.


## Screenshots

### Home Page
![App Screenshot](https://i.imgur.com/xO3AaE0.png)

### Profile
![App Screenshot](https://i.imgur.com/FJ0eGss.png)

### Rooms
![App Screenshot](https://i.imgur.com/cvhmQ8V.png)

### Search Rooms
![App Screenshot](https://i.imgur.com/eoq8eAe.png)

### Create/Edit Rooms
![App Screenshot](https://i.imgur.com/85m0y9B.png)

### Messages
![App Screenshot](https://i.imgur.com/IEzA8ec.png)

### Mobile
![App Screenshot](https://i.imgur.com/DaeTQlg.png)

### Login
![App Screenshot](https://i.imgur.com/FKxazLi.png)

### Register
![App Screenshot](https://i.imgur.com/XPt2dKI.png)

### Admin Dashboard
![App Screenshot](https://i.imgur.com/9J0kXop.png)

### Admin Dashboard GoogleUsers
![App Screenshot](https://i.imgur.com/JDMOwRq.png)

### Admin Dashboard Rooms
![App Screenshot](https://i.imgur.com/tIIIuo3.png)

### Admin Dashboard Users
![App Screenshot](https://i.imgur.com/zeU1Btr.png)

## Figures

### Use Case Diagram 
![App Screenshot](https://i.imgur.com/miyapk1.png)

### Enity Relationship Diagram 
![App Screenshot](https://i.imgur.com/hysI7vT.jpg)

### Data Flow Diagram
![App Screenshot](https://i.imgur.com/0KRa6Tc.png)

### Sequence Diagram For Administrator 
![App Screenshot](https://i.imgur.com/JBi6Yif.png)
## Run Locally

Clone the project

```bash
  git clone https://github.com/baftjarjusufi/estudysphere.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Migrate

```bash
  python manage.py migrate
```

Make Migrations

```bash
  python manage.py makemigrations
```

Start the server

```bash
  python manage.py runserver
```









## Roadmap

- The future implementation will be an online implemented web application , where can be accessed at any time and any browser desired , it will be also a lot more mobile friendly and that can be downloaded from the Appstore or even playstore to be accessed also on the phones , tablets , on all the devices.

- Incorporating and inviting multiple organizations with customized theme or private personalized rooms with a special code to each of them so people can join , to be accessed all around the world. 

- The application aims to provide users with personalized themes that they can choose from, as well as a wide range of customization options. It offers a direct messaging service that allows users to securely communicate with individuals they are interested in or their friends, based on specific topics or rooms. Additionally, users have the ability to follow others within the web application and receive notifications whenever they create a new room or make a post, keeping them updated on their activities.

- To add tasks for organizations to help their students more for the studying aspect. To add more gamification elements , such as badges , achievements , a ranking leaderboard , to motivate people engagement and foster a competitive learning platform. Incorporating a virtual classroom where people can hop on the video sessions with friends , colleagues , talk , share resources there. To add more supported languages in the platform so to support a wider global audience.

## Lessons Learned

In conclusion, this project has been a valuable learning experience in Django web development. It allowed me to gain practical knowledge in building a web application that facilitates the creation, management, and interaction of users within a website application. Through this project, I have mastered essential Django concepts, HTML, CSS and Javascript concepts including user authentication, database modeling, form handling, the use of the Django Admin interface, making the front end django friendly , incorporating the back-end with front-end together. 


# Hi, I'm Baftjar! 👋


