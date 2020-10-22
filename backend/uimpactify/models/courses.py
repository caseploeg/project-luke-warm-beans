# mongo-engine packages
from mongoengine import (Document,
                         EmbeddedDocument,
                         EmbeddedDocumentField,
                         ListField,
                         StringField,
                         EmailField,
                         BooleanField,
                         ReferenceField,
                         CASCADE,
                         PULL)

# project resources
from uimpactify.models.users import Users
from uimpactify.models.coursecontent import CourseContent

class Courses(Document):
    """
    a mongoengine document, which represents a course.

    :param name: required name of the course
    :param objective: course objectives
    :param learningOutcomes: course learning outcomes
    :param instructor: instructor teaching the course
    :param students: list of students in the course
    :param endorsedBy: list of organizations endorsing the course
    :param trainingFor: list of organizations using the course as training
    :param published: required string ID of course instructor
    :param courseContent: required string ID of course instructor
    """

    name = StringField(required=True)
    objective = StringField()
    learningOutcomes = StringField()
    instructor = ReferenceField('Users', reverse_delete_rule=CASCADE, required=True)
    students = ListField(ReferenceField('Users', reverse_delete_rule=PULL))
    endorsedBy = ListField(ReferenceField('Users', reverse_delete_rule=PULL))
    trainingFor = ListField(ReferenceField('Users', reverse_delete_rule=PULL))
    published = BooleanField(default=False)
    courseContent = ListField(ReferenceField('CourseContent', reverse_delete_rule=PULL))