from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser

class CustomUser(AbstractBaseUser):
    username = models.CharField("username", max_length=150, unique=True)
    first_name = models.CharField("first name", max_length=150, blank=True)
    last_name = models.CharField("last name", max_length=150, blank=True)
    email = models.CharField("email address", max_length=256, unique=True)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    
