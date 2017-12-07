/**
 * @ngdoc constant
 * @name aaal.aaalModelDefinitions
 * @description
 * # aaalModelDefinitions
 * Constant in the aaal.
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .constant('aaalModelDefinitions', {
            'Answer': {
                'name': 'Answer',
                'properties': {
                    'content': {
                        'type': 'string',
                        'required': true
                    },
                    'correct': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    }
                },
                'validations': [
                ],
                'relations': {
                    'question': {
                        'type': 'belongsTo',
                        'model': 'Question',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'BootcampResolved': {
                'name': 'BootcampResolved',
                'properties': {
                    'resolved': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    }
                },
                'validations': [
                ],
                'relations': {
                    'users': {
                        'type': 'belongsTo',
                        'model': 'users',
                        'foreignKey': ''
                    },
                    'bootcamp': {
                        'type': 'belongsTo',
                        'model': 'Bootcamp',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'Bootcamp': {
                'name': 'Bootcamp',
                'properties': {
                    'title': {
                        'type': 'string',
                        'required': true
                    },
                    'tip': {
                        'type': 'string',
                        'required': true
                    },
                    'solution': {
                        'type': 'string'
                    },
                    'theory': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'question': {
                        'type': 'belongsTo',
                        'model': 'Question',
                        'foreignKey': ''
                    },
                    'bootcampResolveds': {
                        'type': 'hasMany',
                        'model': 'BootcampResolved',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'City': {
                'name': 'City',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'userDetails': {
                        'type': 'belongsTo',
                        'model': 'UserDetails',
                        'foreignKey': ''
                    },
                    'institutions': {
                        'type': 'hasMany',
                        'model': 'Institution',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'container': {
                'name': 'container',
                'properties': {
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            },
            'Country': {
                'name': 'Country',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'regions': {
                        'type': 'hasMany',
                        'model': 'Region',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'EducationType': {
                'name': 'EducationType',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'institution': {
                        'type': 'belongsTo',
                        'model': 'Institution',
                        'foreignKey': ''
                    },
                    'quizzes': {
                        'type': 'hasMany',
                        'model': 'Quiz',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'ExamType': {
                'name': 'ExamType',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    },
                    'active': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    },
                    'imageUrl': {
                        'type': 'string'
                    }
                },
                'validations': [
                ],
                'relations': {
                    'quizzes': {
                        'type': 'hasMany',
                        'model': 'Quiz',
                        'foreignKey': ''
                    },
                    'subCategories': {
                        'type': 'hasMany',
                        'model': 'subCategory',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'Institution': {
                'name': 'Institution',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'regions': {
                        'type': 'belongsTo',
                        'model': 'Region',
                        'foreignKey': ''
                    },
                    'educationTypes': {
                        'type': 'hasOne',
                        'model': 'EducationType',
                        'foreignKey': ''
                    },
                    'userDetails': {
                        'type': 'belongsTo',
                        'model': 'UserDetails',
                        'foreignKey': ''
                    },
                    'city': {
                        'type': 'belongsTo',
                        'model': 'City',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'Level': {
                'name': 'Level',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'quizzes': {
                        'type': 'hasMany',
                        'model': 'Quiz',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    }
                ],
                'mixins': [
                ]
            },
            'Occupation': {
                'name': 'Occupation',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'userDetails': {
                        'type': 'belongsTo',
                        'model': 'UserDetails',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'QuestionType': {
                'name': 'QuestionType',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'questions': {
                        'type': 'hasMany',
                        'model': 'Question',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'Question': {
                'name': 'Question',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    },
                    'level11': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    },
                    'active': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    },
                    'instructions': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'subCategory': {
                        'type': 'belongsTo',
                        'model': 'subCategory',
                        'foreignKey': ''
                    },
                    'bootcamps': {
                        'type': 'hasOne',
                        'model': 'Bootcamp',
                        'foreignKey': ''
                    },
                    'answers': {
                        'type': 'hasMany',
                        'model': 'Answer',
                        'foreignKey': ''
                    },
                    'subject': {
                        'type': 'belongsTo',
                        'model': 'Subject',
                        'foreignKey': ''
                    },
                    'questionType': {
                        'type': 'belongsTo',
                        'model': 'QuestionType',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'Quiz': {
                'name': 'Quiz',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    },
                    'active': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    },
                    'imageUrl': {
                        'type': 'string'
                    }
                },
                'validations': [
                ],
                'relations': {
                    'educationType': {
                        'type': 'hasOne',
                        'model': 'EducationType',
                        'foreignKey': ''
                    },
                    'level': {
                        'type': 'hasOne',
                        'model': 'Level',
                        'foreignKey': ''
                    },
                    'examTypes': {
                        'type': 'hasOne',
                        'model': 'ExamType',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'Region': {
                'name': 'Region',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'country': {
                        'type': 'belongsTo',
                        'model': 'Country',
                        'foreignKey': ''
                    },
                    'institutions': {
                        'type': 'hasMany',
                        'model': 'Institution',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'subCategory': {
                'name': 'subCategory',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    },
                    'active': {
                        'type': 'boolean',
                        'required': true,
                        'default': false
                    },
                    'imageUrl': {
                        'type': 'string'
                    }
                },
                'validations': [
                ],
                'relations': {
                    'examType': {
                        'type': 'belongsTo',
                        'model': 'ExamType',
                        'foreignKey': ''
                    },
                    'questions': {
                        'type': 'hasMany',
                        'model': 'Question',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'Subject': {
                'name': 'Subject',
                'properties': {
                    'name': {
                        'type': 'string',
                        'required': true
                    }
                },
                'validations': [
                ],
                'relations': {
                    'questions': {
                        'type': 'hasMany',
                        'model': 'Question',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'UserDetails': {
                'name': 'UserDetails',
                'properties': {
                    'FirstName': {
                        'type': 'string',
                        'required': true
                    },
                    'LastName': {
                        'type': 'string',
                        'required': true
                    },
                    'slogan': {
                        'type': 'string'
                    },
                    'favoriteSubject': {
                        'type': 'string'
                    },
                    'picture': {
                        'type': 'string'
                    },
                    'gender': {
                        'type': 'string'
                    },
                    'nickname': {
                        'type': 'string'
                    }
                },
                'validations': [
                ],
                'relations': {
                    'occupation': {
                        'type': 'hasOne',
                        'model': 'Occupation',
                        'foreignKey': ''
                    },
                    'institution': {
                        'type': 'hasOne',
                        'model': 'Institution',
                        'foreignKey': ''
                    },
                    'cities': {
                        'type': 'hasOne',
                        'model': 'City',
                        'foreignKey': ''
                    },
                    'user': {
                        'type': 'belongsTo',
                        'model': 'user',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$owner',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'READ',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    },
                    {
                        'accessType': 'WRITE',
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'ALLOW'
                    }
                ],
                'mixins': [
                ]
            },
            'users': {
                'name': 'users',
                'properties': {
                },
                'validations': [
                ],
                'relations': {
                    'userDetails': {
                        'type': 'hasOne',
                        'model': 'UserDetails',
                        'foreignKey': ''
                    },
                    'bootcampsResolved': {
                        'type': 'hasMany',
                        'model': 'BootcampResolved',
                        'foreignKey': ''
                    }
                },
                'acls': [
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': 'admin',
                        'permission': 'ALLOW'
                    },
                    {
                        'principalType': 'ROLE',
                        'principalId': '$unauthenticated',
                        'permission': 'ALLOW',
                        'property': 'login'
                    },
                    {
                        'accessType': '*',
                        'principalType': 'ROLE',
                        'principalId': '$everyone',
                        'permission': 'DENY'
                    },
                    {
                        'principalType': 'ROLE',
                        'principalId': '$authenticated',
                        'permission': 'DENY',
                        'property': 'login'
                    }
                ],
                'mixins': [
                ]
            }
        });
})();
