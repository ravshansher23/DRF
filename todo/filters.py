from django_filters import rest_framework as filters
from .models import Project, TODO

class ProjectFilters(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']

class TODOFilters(filters.FilterSet):
    project = filters.CharFilter(lookup_expr='contains')
    
    class Meta:
        model = TODO
        fields = ['project']     
        
