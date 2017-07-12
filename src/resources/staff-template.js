export const staffTemplate =
    {
        "type": "view",
        "fields": [
        ],
        "body": {
            "elements": [
                {
                    "element": "h2",
                    "content": "HEADER"
                },
                {
                    "element": "group",
                    "id": "HeaderInfoGroup",
                    "title": "Header info",
                    elements: [
                        {
                            "element": "input",
                            "title": "Code",
                            "field": "code",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Description",
                            "field": "description",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Site",
                            "field": "siteDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        }
                    ]
                },
                {
                    "element": "h2",
                    "content": "PERSONAL DETAILS"
                },
                {
                    "element": "group",
                    "id": "PersonalnfoGroup",
                    "title": "Personal info",
                    elements: [
                        {
                            "element": "input",
                            "title": "Initials",
                            "field": "initials",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "First name",
                            "field": "firstName",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Last name",
                            "field": "lastName",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Job title",
                            "field": "jobTitle",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Post Number",
                            "field": "postNumber",
                            "attributes": {
                                "pattern": "[0-9]*"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Personnel Number",
                            "field": "personnelNumber",
                            "attributes": {
                                "pattern": "[0-9]*"
                            }
                        }
                    ]
                },
                {
                    "element": "group",
                    "id": "ContactInfoGroup",
                    "title": "Contact info",
                    elements: [
                        {
                            "element": "input",
                            "title": "Phone",
                            "field": "phoneNumber",
                            "attributes": {
                                "pattern": "\d{10}+"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Mobile",
                            "field": "mobileNumber",
                            "attributes": {
                                "pattern": "([0-9]{3}-[0-9]{5}-[0-9]{5})*"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Email",
                            "field": "email",
                            "attributes": {
                                "pattern": "[^\w+@[Aa-Zz]+?\.[Aa-Zz]{2,3}$]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Address 1",
                            "field": "address1",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Address 2",
                            "field": "address2",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Address 3",
                            "field": "address3",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        }
                    ]
                },
                {
                    "element": "h2",
                    "content": "MAINTENANCE MANAGER"
                },
                {
                    "element": "group",
                    "id": "MaintenanceGroup",
                    "title": "Maintenance",
                    elements: [
                        {
                            "element": "input",
                            "title": "Section",
                            "field": "sectionDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Trade",
                            "field": "tradeDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Cost Element",
                            "field": "costElementDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Calendar",
                            "field": "calendarDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]",
                                "required": "true"
                            }
                        }
                    ]
                },
                {
                    "element": "group",
                    "id": "RatesPerHourGroup",
                    "title": "Rates per hour",
                    elements: [
                        {
                            "element": "input",
                            "title": "Site currency",
                            "field": "siteCurrencyDescription",
                            "attributes": {
                                "pattern": "[Aa-Zz]"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Normal time",
                            "field": "normalTime",
                            "attributes": {
                                "pattern": "[0-9]*",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Overtime 1",
                            "field": "overtime1",
                            "attributes": {
                                "pattern": "[0-9]*",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Overtime 2",
                            "field": "overtime2",
                            "attributes": {
                                "pattern": "[0-9]*",
                                "required": "true"
                            }
                        },
                        {
                            "element": "input",
                            "title": "Overtime 3",
                            "field": "overtime3",
                            "attributes": {
                                "pattern": "[0-9]*",
                                "required": "true"
                            }
                        }
                    ]
                },
                {
                    "element": "group",
                    "id": "NotificationsGroup",
                    "title": "Notifications",
                    elements: [
                        {
                            "element": "checkbox",
                            "title": "Email on Work Order Approval",
                            "field": "emailOnApprovedWO"
                        },
                        {
                            "element": "checkbox",
                            "title": "SMS on Work Order Approval",
                            "field": "smsOnApprovedWO",
                        },
                        {
                            "element": "checkbox",
                            "title": "SMS for Critical Assets only",
                            "field": "smsForCriticalAsset",
                        }
                    ]
                },
                {
                    "element": "h2",
                    "content": "GEOGRAPHIC DATA"
                },
                {
                    "element": "group",
                    "id": "GeographicLocationGroup",
                    "title": "Geographic location"
                },
                {
                    "element": "group",
                    "id": "GeographicNotesGroup",
                    "title": "Geographic notes"
                }
            ]
        }
    };
