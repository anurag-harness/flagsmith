# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-08 13:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('features', '0006_featurestate_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='feature',
            name='default_enabled',
            field=models.BooleanField(default=False),
        ),
    ]
