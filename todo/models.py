from django.db import models
from users.models import CustomUser
class Project(models.Model):
    name = models.CharField(max_length=256)
    link = models.URLField(max_length=256, null=True, blank=True, help_text='Project url')
    users = models.ManyToManyField(CustomUser)

    def __str__(self) -> str:
        return self.name


class TODO(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f'{self.project} TODO'
