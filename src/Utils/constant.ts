//****************** specify constant variable ****************(EX. const TEST_USER="test user")

// *************** all file types ************
export const FILE_TYPES = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/ogg',
    'audio/mp3',
    'audio/ogg',
    'model/glb',
    'model/gltf',
    'audio/mpeg',
    'application/pdf',
    'application/json',
    'text/csv',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/xml',
  ];
  
  // ************* hear we define all filed's name which contain file ***********
  export const FILE_FIELD_NAME_OBJ = [
    {
      fieldName: 'user',
      directory: 'profile',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'bg_img',
      directory: 'uploads/themes',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'company_logo',
      directory: 'uploads/company_logo',
      size: 1024 * 1024 * 10, //10 mb
    },
    // {
    //   fieldName: 'signature',
    //   directory: 'uploads/signature',
    //   size: 1024 * 1024 * 10 //10 mb
    // },
    {
      fieldName: 'attachments',
      directory: 'uploads/test_attachments',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'patient_img_1',
      directory: 'uploads/patients',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'patient_img_2',
      directory: 'uploads/patients',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'item_img',
      directory: 'uploads/line_items',
      size: 1024 * 1024 * 5, //5 mb
    },
    {
      fieldName: 'note_attachment',
      directory: 'uploads/notes',
      size: 1024 * 1024 * 10, //10 mb
    },
    // {
    //   fieldName: 'invoice_signature',
    //   directory: 'uploads/invoice_signature',
    //   size: 1024 * 1024 * 10 //10 mb
    // },
    {
      fieldName: 'cheque_img',
      directory: 'uploads/cheque_img',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'user_profile_img',
      directory: 'uploads/user_img',
      size: 1024 * 1024 * 10, //10 mb
    },
    {
      fieldName: 'email_uploads',
      directory: 'uploads/email_uploads',
      size: 1024 * 1024 * 10, //10 mb
    },
  ];
  
  export const IMAGEMIMETYPE = ['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif'];
  
  export const WEEKENDDAYS = {
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
  };
  
  export const desktopOsExtensions = new Map([
    ['Linux', ['deb']],
    ['Windows', ['exe']],
    ['Macintosh', ['dmg']],
  ]);
  
  export const allExtensions = Array.from(desktopOsExtensions.values()).flat();