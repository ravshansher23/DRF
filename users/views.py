from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import mixins


from .models import CustomUser
from .serializers import CustomUserSerializer, NewCustomUserSerializer

class CustomUserModelViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
mixins.RetrieveModelMixin, GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    def get_serializer_class(self):
        if self.request.version == '0.1':
            return NewCustomUserSerializer
        return CustomUserSerializer

