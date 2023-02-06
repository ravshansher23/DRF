from django.contrib import admin
from users import models as users_models

@admin.register(users_models.CustomUser)
class CustonUserAdmin(admin.ModelAdmin):
    list_display = ['email', 'username', 'last_name', 'first_name']
    ordering = ['last_name']