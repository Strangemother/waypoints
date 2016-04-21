from __future__ import unicode_literals

from django.conf import settings
from django.db import models
from django.utils import timezone


class Bookmark(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    url = models.URLField(max_length=255)
    title = models.CharField(max_length=255)
    saved = models.DateTimeField(default=timezone.now())
    deleted = models.BooleanField(default=False)
    comment = models.TextField(blank=True)
    tags = models.ManyToManyField('wptags.Tag')

    def __str__(self):
        return self.title
