# Generated by Django 4.1.7 on 2023-03-01 00:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('rating', '0004_alter_rating_date_creation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='date_creation',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
