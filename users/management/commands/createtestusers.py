from django.core.management.base import BaseCommand
from users import models as users_models
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Creating Superuser and 3 test-users'

    def handle(self, *args, **options):
        call_command('loaddata', '001_user_admin.json')
