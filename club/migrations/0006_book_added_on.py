# Generated by Django 3.0.7 on 2020-07-03 20:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('club', '0005_auto_20200702_0232'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='added_on',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
