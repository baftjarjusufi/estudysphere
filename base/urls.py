from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.loginPage, name="login"),

    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerPage, name="register"),


    path('', views.home, name="home"),
    path('room/<str:pk>/', views.room, name="room"),
    path('profile/<str:pk>/', views.userProfile, name="user-profile"),


    path('krijo-room/', views.krijoRoom, name="krijo-room"),
    path('update-room/<str:pk>/', views.updateRoom, name="update-room"),
    path('delete-room/<str:pk>/', views.deleteRoom, name="delete-room"),
    path('remove-message/<str:pk>/', views.removeMessage, name="remove-message"),

    path('update-user/', views.updateUser, name="update-user"),

    path('topics/', views.topicsPage, name="topics"),

    path('activity/', views.activityPage, name="activity"),

]