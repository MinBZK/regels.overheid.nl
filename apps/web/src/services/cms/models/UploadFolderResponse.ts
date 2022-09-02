/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadFolderResponse = {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      pathId?: number;
      parent?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            pathId?: number;
            parent?: {
              data?: {
                id?: string;
                attributes?: any;
              };
            };
            children?: {
              data?: Array<{
                id?: string;
                attributes?: any;
              }>;
            };
            files?: {
              data?: Array<{
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: Array<{
                      id?: string;
                      attributes?: any;
                    }>;
                  };
                  folder?: {
                    data?: {
                      id?: string;
                      attributes?: any;
                    };
                  };
                  folderPath?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: Array<{
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: Array<{
                                  id?: string;
                                  attributes?: any;
                                }>;
                              };
                              permissions?: {
                                data?: Array<{
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: any;
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: any;
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: any;
                                      };
                                    };
                                  };
                                }>;
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: any;
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: any;
                                };
                              };
                            };
                          }>;
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: any;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: any;
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: any;
                    };
                  };
                };
              }>;
            };
            path?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: any;
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: any;
              };
            };
          };
        };
      };
      children?: {
        data?: Array<{
          id?: string;
          attributes?: any;
        }>;
      };
      files?: {
        data?: Array<{
          id?: string;
          attributes?: any;
        }>;
      };
      path?: string;
      createdAt?: string;
      updatedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: any;
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: any;
        };
      };
    };
  };
  meta?: any;
};
