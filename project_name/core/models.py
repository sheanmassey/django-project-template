from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class AppUser(AbstractUser):
    def __unicode__(self):
        return u"%s - %s" % (self.id, self.username)


