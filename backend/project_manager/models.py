from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return f"{self.username} --- {self.email}"


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    goals = models.TextField()
    username = models.ForeignKey(Users,on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.username} - {self.name}"


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    project = models.ForeignKey(Project,on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} - {self.project}"


class Journal(models.Model):
    date = models.DateField()
    content = models.TextField()
    project = models.ForeignKey(Project,on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.project} - {self.project.username}"
    