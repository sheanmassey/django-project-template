from django.contrib import admin

from . import models

for name, inst in models.__dict__.items():
    if isinstance(inst, type):
        try:
            admin.site.register(inst)
        except:
            pass

