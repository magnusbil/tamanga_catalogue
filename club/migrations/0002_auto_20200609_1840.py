# Generated by Django 3.0.7 on 2020-06-09 18:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('club', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='interests',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(choices=[('action', 'Action'), ('comedy', 'Comedy'), ('drama', 'Drama'), ('horror', 'Horror'), ('misc', 'Miscellaneous'), ('slice_of_life', 'Slice of Life'), ('yoai', 'Yoai'), ('yuri', 'Yuri'), ('boys_love', 'Boys Love'), ('girls_love', 'Girls Love'), ('isekai', 'Isekai')], max_length=255), blank=True, default=list, null=True, size=None),
        ),
    ]