

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
# Create your tests here.
from users.models import CustomUser
from users.views import CustomUserModelViewSet
from todo.views import TODOCustomViewSet, ProjectCustomViewSet
from todo.models import TODO, Project


class TestTodoViewSet(TestCase):
    def setUp(self) -> None:
        self.name = 'admin'
        self.password = '123'
        self.email = 'admin@mail.ru'
        self.data = {"username": "user",
                     "first_name": "Ivan",
                     "last_name": "Ivanov",
                     "email": "Ivan@ru.ru"}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(
            username=self.name, password=self.password, email=self.email)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = ProjectCustomViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        view = CustomUserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_client(self):
        client = APIClient()
        user = CustomUser.objects.create(**self.data)
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
  

    def tearDown(self) -> None:
        return super().tearDown()

class TestApi(APITestCase):
    def setUp(self) -> None:
        self.name = 'admin'
        self.password = '123'
        self.email = 'admin@mail.ru'
        self.data_user = {'username':'Pavel12', 'first_name':'Pavel', 'last_name':'Pavlov', 'email':'pavel@yandex.ru'}
        self.user = CustomUser.objects.create(**self.data_user)
        self.data = {"name": "proj",
                     "link": "",
                     "users": set(self.user.username)}
        self.url = '/api/projects/'
        self.admin = User.objects.create_superuser(
            username=self.name, password=self.password, email=self.email)
        
    def test_get_list(self):
        response = self.client.get(self.url)  
        self.assertEqual(response.status_code, status.HTTP_200_OK)  

    def test_put_mixer(self):
        proj = mixer.blend(Project)
        self.client.login(username=self.name, password=self.password)
        response = self.client.put(f'{self.url}{proj.id}/', {'name':'new_proj', 'link':'', 'users':'user'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        proj_ = Project.objects.get(id=proj.id)
        self.assertEqual(proj_.name, 'new_proj')
        self.client.logout()


    def tearDown(self) -> None:
        return super().tearDown()