import graphene
from todo.models import TODO, Project
from users.models import CustomUser
from graphene_django import DjangoObjectType

class TodoType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'



class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)

    def resolve_all_todos(self, info):
        return TODO.objects.all()
    

    def resolve_all_projects(self, info):
        return Project.objects.all()
    

    def resolve_all_users(self, info):
        return CustomUser.objects.all()


schema = graphene.Schema(query=Query)