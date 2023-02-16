from django.contrib import admin
from todo import models as todo_models

@admin.register(todo_models.TODO)
class TODOAdmin(admin.ModelAdmin):
    pass

@admin.register(todo_models.Project)
class ProjectAdmin(admin.ModelAdmin):
    pass  