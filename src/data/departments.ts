import { DepartmentData } from '../types';

export const departments: DepartmentData[] = [
  {
    id: 'mechatronics',
    name: 'ميكاترونكس',
    nameAr: 'ميكاترونكس',
    icon: 'Cpu',
    color: 'from-blue-600 to-blue-800',
    description: 'دمج الهندسة الميكانيكية والكهربائية وهندسة الحاسوب',
    descriptionAr: 'دمج الهندسة الميكانيكية والكهربائية وهندسة الحاسوب',
    semesters: [
      {
        id: 'mechatronics-semester-1',
        name: 'الفصل الدراسي الأول',
        nameAr: 'الفصل الدراسي الأول',
        terms: [
          {
            id: 'mechatronics-s1-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'mech-s1-t1-1', name: 'الرياضيات الهندسية', nameAr: 'الرياضيات الهندسية', driveLink: 'https://drive.google.com/drive/folders/1abc123' },
              { id: 'mech-s1-t1-2', name: 'الفيزياء العامة', nameAr: 'الفيزياء العامة', driveLink: 'https://drive.google.com/drive/folders/1def456' },
              { id: 'mech-s1-t1-3', name: 'الكيمياء العامة', nameAr: 'الكيمياء العامة', driveLink: 'https://drive.google.com/drive/folders/1ghi789' },
              { id: 'mech-s1-t1-4', name: 'الرسم الهندسي', nameAr: 'الرسم الهندسي', driveLink: 'https://drive.google.com/drive/folders/1jkl012' },
              { id: 'mech-s1-t1-5', name: 'مقدمة في الهندسة', nameAr: 'مقدمة في الهندسة', driveLink: 'https://drive.google.com/drive/folders/1mno345' },
              { id: 'mech-s1-t1-6', name: 'اللغة الإنجليزية التقنية', nameAr: 'اللغة الإنجليزية التقنية', driveLink: 'https://drive.google.com/drive/folders/1pqr678' },
              { id: 'mech-s1-t1-7', name: 'أساسيات الحاسوب', nameAr: 'أساسيات الحاسوب', driveLink: 'https://drive.google.com/drive/folders/1stu901' },
              { id: 'mech-s1-t1-8', name: 'ورشة عملية', nameAr: 'ورشة عملية', driveLink: 'https://drive.google.com/drive/folders/1vwx234' },
              { id: 'mech-s1-t1-9', name: 'السلامة المهنية', nameAr: 'السلامة المهنية', driveLink: 'https://drive.google.com/drive/folders/1yz567' },
              { id: 'mech-s1-t1-10', name: 'مهارات التواصل', nameAr: 'مهارات التواصل', driveLink: 'https://drive.google.com/drive/folders/1abc890' }
            ]
          },
          {
            id: 'mechatronics-s1-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'mech-s1-t2-1', name: 'التفاضل والتكامل', nameAr: 'التفاضل والتكامل', driveLink: 'https://drive.google.com/drive/folders/2abc123' },
              { id: 'mech-s1-t2-2', name: 'الكهرباء والمغناطيسية', nameAr: 'الكهرباء والمغناطيسية', driveLink: 'https://drive.google.com/drive/folders/2def456' },
              { id: 'mech-s1-t2-3', name: 'علم المواد', nameAr: 'علم المواد', driveLink: 'https://drive.google.com/drive/folders/2ghi789' },
              { id: 'mech-s1-t2-4', name: 'الرسم بالحاسوب', nameAr: 'الرسم بالحاسوب', driveLink: 'https://drive.google.com/drive/folders/2jkl012' },
              { id: 'mech-s1-t2-5', name: 'أساسيات الإلكترونيات', nameAr: 'أساسيات الإلكترونيات', driveLink: 'https://drive.google.com/drive/folders/2mno345' },
              { id: 'mech-s1-t2-6', name: 'البرمجة الأساسية', nameAr: 'البرمجة الأساسية', driveLink: 'https://drive.google.com/drive/folders/2pqr678' },
              { id: 'mech-s1-t2-7', name: 'الإحصاء والاحتمالات', nameAr: 'الإحصاء والاحتمالات', driveLink: 'https://drive.google.com/drive/folders/2stu901' },
              { id: 'mech-s1-t2-8', name: 'تطبيقات عملية', nameAr: 'تطبيقات عملية', driveLink: 'https://drive.google.com/drive/folders/2vwx234' },
              { id: 'mech-s1-t2-9', name: 'إدارة المشاريع', nameAr: 'إدارة المشاريع', driveLink: 'https://drive.google.com/drive/folders/2yz567' },
              { id: 'mech-s1-t2-10', name: 'أخلاقيات المهنة', nameAr: 'أخلاقيات المهنة', driveLink: 'https://drive.google.com/drive/folders/2abc890' }
            ]
          }
        ]
      },
      {
        id: 'mechatronics-semester-2',
        name: 'الفصل الدراسي الثاني',
        nameAr: 'الفصل الدراسي الثاني',
        terms: [
          {
            id: 'mechatronics-s2-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'mech-s2-t1-1', name: 'MATLAB ', nameAr: 'MATLAB ', driveLink: 'https://drive.google.com/drive/folders/1vgIwcJeb259XRkJ6jzUj6ikWIdB5j4Hd?usp=drive_link' },
              { id: 'mech-s2-t1-2', name: 'plc', nameAr: 'plc', driveLink: 'https://drive.google.com/drive/folders/1F2nrcLCKbu3aIrSS58veDn1PYEQSvfdz?usp=drive_link' },
              { id: 'mech-s2-t1-3', name: 'Selection of materials', nameAr: 'Selection of materials', driveLink: 'https://drive.google.com/drive/folders/1EWR2_pDwlrIscFxysqCjQpJU4qxh3eZx?usp=drive_link' },
              { id: 'mech-s2-t1-4', name: 'تحكم بل الحاسب', nameAr: 'تحكم بل الحاسب', driveLink: 'https://drive.google.com/drive/folders/1uDWAgIWgOhqyw0_EiE0Xd6A9N7memSJQ?usp=drive_link' },
              { id: 'mech-s2-t1-5', name: 'هيدروليك', nameAr: 'هيدروليك', driveLink: 'https://drive.google.com/drive/folders/1JJq2bJ2cjNHnEG3DwelazOxegUtVMGDh?usp=drive_link' },
              { id: 'mech-s2-t1-6', name: 'البرمجة المتقدمة', nameAr: 'البرمجة المتقدمة', driveLink: 'https://drive.google.com/drive/folders/3pqr678' },
              { id: 'mech-s2-t1-7', name: 'نظرية التحكم', nameAr: 'نظرية التحكم', driveLink: 'https://drive.google.com/drive/folders/3stu901' },
              { id: 'mech-s2-t1-8', name: 'المختبرات العملية', nameAr: 'المختبرات العملية', driveLink: 'https://drive.google.com/drive/folders/3vwx234' },
              { id: 'mech-s2-t1-9', name: 'الاهتزازات الميكانيكية', nameAr: 'الاهتزازات الميكانيكية', driveLink: 'https://drive.google.com/drive/folders/3yz567' },
              { id: 'mech-s2-t1-10', name: 'أنظمة القياس', nameAr: 'أنظمة القياس', driveLink: 'https://drive.google.com/drive/folders/3abc890' }
            ]
          },
          {
            id: 'mechatronics-s2-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'mech-s2-t2-1', name: 'الستاتيكا', nameAr: 'الستاتيكا', driveLink: 'https://drive.google.com/drive/folders/4abc123' },
              { id: 'mech-s2-t2-2', name: 'الإلكترونيات الرقمية', nameAr: 'الإلكترونيات الرقمية', driveLink: 'https://drive.google.com/drive/folders/4def456' },
              { id: 'mech-s2-t2-3', name: 'الجبر الخطي', nameAr: 'الجبر الخطي', driveLink: 'https://drive.google.com/drive/folders/4ghi789' },
              { id: 'mech-s2-t2-4', name: 'التصنيع والإنتاج', nameAr: 'التصنيع والإنتاج', driveLink: 'https://drive.google.com/drive/folders/4jkl012' },
              { id: 'mech-s2-t2-5', name: 'المتحكمات الدقيقة', nameAr: 'المتحكمات الدقيقة', driveLink: 'https://drive.google.com/drive/folders/4mno345' },
              { id: 'mech-s2-t2-6', name: 'هياكل البيانات', nameAr: 'هياكل البيانات', driveLink: 'https://drive.google.com/drive/folders/4pqr678' },
              { id: 'mech-s2-t2-7', name: 'أنظمة التحكم الرقمية', nameAr: 'أنظمة التحكم الرقمية', driveLink: 'https://drive.google.com/drive/folders/4stu901' },
              { id: 'mech-s2-t2-8', name: 'مشروع تطبيقي', nameAr: 'مشروع تطبيقي', driveLink: 'https://drive.google.com/drive/folders/4vwx234' },
              { id: 'mech-s2-t2-9', name: 'الهيدروليكا والنيوماتيكا', nameAr: 'الهيدروليكا والنيوماتيكا', driveLink: 'https://drive.google.com/drive/folders/4yz567' },
              { id: 'mech-s2-t2-10', name: 'الحساسات والمشغلات', nameAr: 'الحساسات والمشغلات', driveLink: 'https://drive.google.com/drive/folders/4abc890' }
            ]
          }
        ]
      },
      {
        id: 'mechatronics-semester-3',
        name: 'الفصل الدراسي الثالث',
        nameAr: 'الفصل الدراسي الثالث',
        terms: [
          {
            id: 'mechatronics-s3-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'mech-s3-t1-1', name: ' power', nameAr: 'power', driveLink: 'https://drive.google.com/drive/folders/1nPLd2jGry5nyYZJg7YM4HEli8cYbJ3W9?usp=sharing' },
              { id: 'mech-s3-t1-2', name: 'أنظمة التحكم المتقدمة', nameAr: 'أنظمة التحكم المتقدمة', driveLink: 'https://drive.google.com/drive/folders/5def456' },
              { id: 'mech-s3-t1-3', name: 'الذكاء الاصطناعي', nameAr: 'الذكاء الاصطناعي', driveLink: 'https://drive.google.com/drive/folders/5ghi789' },
              { id: 'mech-s3-t1-4', name: 'التصميم بالحاسوب', nameAr: 'التصميم بالحاسوب', driveLink: 'https://drive.google.com/drive/folders/5jkl012' },
              { id: 'mech-s3-t1-5', name: 'أنظمة الاتصالات', nameAr: 'أنظمة الاتصالات', driveLink: 'https://drive.google.com/drive/folders/5mno345' },
              { id: 'mech-s3-t1-6', name: 'البرمجة الشيئية', nameAr: 'البرمجة الشيئية', driveLink: 'https://drive.google.com/drive/folders/5pqr678' },
              { id: 'mech-s3-t1-7', name: 'معالجة الإشارات', nameAr: 'معالجة الإشارات', driveLink: 'https://drive.google.com/drive/folders/5stu901' },
              { id: 'mech-s3-t1-8', name: 'مشروع متقدم', nameAr: 'مشروع متقدم', driveLink: 'https://drive.google.com/drive/folders/5vwx234' },
              { id: 'mech-s3-t1-9', name: 'الأتمتة الصناعية', nameAr: 'الأتمتة الصناعية', driveLink: 'https://drive.google.com/drive/folders/5yz567' },
              { id: 'mech-s3-t1-10', name: 'الرؤية الحاسوبية', nameAr: 'الرؤية الحاسوبية', driveLink: 'https://drive.google.com/drive/folders/5abc890' }
            ]
          },
          {
            id: 'mechatronics-s3-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'mech-s3-t2-1', name: 'Cnc', nameAr: 'Cnc', driveLink: 'https://drive.google.com/drive/folders/1bVu5uuydBX3-R9rL-ajpyqKThCp3icqJ?usp=sharing' },
              { id: 'mech-s3-t2-2', name: 'Mechanism Design', nameAr: 'Mechanism Design', driveLink: 'https://drive.google.com/drive/folders/1v_SQGHBUQEFw1a1oMi5MQE26gTVvW6L9?usp=sharing' },
              { id: 'mech-s3-t2-3', name: 'Microcontroller Technology', nameAr: 'Microcontroller Technology', driveLink: 'https://drive.google.com/drive/folders/14tLQ53UDDOxoYLSdKEfc2jcAT7BhiJWf?usp=sharing' },
              { id: 'mech-s3-t2-4', name: 'Power Electronics', nameAr: 'Power Electronics', driveLink: 'https://drive.google.com/drive/folders/1rEHlfJRkg4Lt-MukonTdacgDtFFu0u9i?usp=drive_link' },
              { id: 'mech-s3-t2-5', name: 'Production Systems Planning', nameAr: 'Production Systems Planning', driveLink: 'https://drive.google.com/drive/folders/1HApZmtQ07A9tksYnQAN_JFrGVEipL3s9?usp=drive_link' },
              { id: 'mech-s3-t2-6', name: 'تطوير التطبيقات', nameAr: 'تطوير التطبيقات', driveLink: 'https://drive.google.com/drive/folders/6pqr678' },
              { id: 'mech-s3-t2-7', name: 'معالجة الصور', nameAr: 'معالجة الصور', driveLink: 'https://drive.google.com/drive/folders/6stu901' },
              { id: 'mech-s3-t2-8', name: 'مشروع التخرج 1', nameAr: 'مشروع التخرج 1', driveLink: 'https://drive.google.com/drive/folders/6vwx234' },
              { id: 'mech-s3-t2-9', name: 'أنظمة التصنيع المرنة', nameAr: 'أنظمة التصنيع المرنة', driveLink: 'https://drive.google.com/drive/folders/6yz567' },
              { id: 'mech-s3-t2-10', name: 'التشخيص والصيانة', nameAr: 'التشخيص والصيانة', driveLink: 'https://drive.google.com/drive/folders/6abc890' }
            ]
          }
        ]
      },
      {
        id: 'mechatronics-semester-4',
        name: 'الفصل الدراسي الرابع',
        nameAr: 'الفصل الدراسي الرابع',
        terms: [
          {
            id: 'mechatronics-s4-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
             { id: 'mech-s4-t1-1', name: 'الأنظمة الديناميكية', nameAr: 'الأنظمة الديناميكية', driveLink: 'https://drive.google.com/drive/folders/xxx1' },
             { id: 'mech-s4-t1-2', name: 'Embedded Systems', nameAr: 'Embedded Systems', driveLink: 'https://drive.google.com/drive/folders/xxx2' },
             { id: 'mech-s4-t1-3', name: 'مهارات توظيف', nameAr: 'مهارات توظيف', driveLink: 'https://drive.google.com/drive/folders/xxx3' },
             { id: 'mech-s4-t1-4', name: 'معالجة الإشارات', nameAr: 'معالجة الإشارات', driveLink: 'https://drive.google.com/drive/folders/xxx4' },
             { id: 'mech-s4-t1-5', name: 'ضبط جودة', nameAr: 'ضبط جودة', driveLink: 'https://drive.google.com/drive/folders/xxx5' },
             { id: 'mech-s4-t1-6', name: 'HMI', nameAr: 'HMI', driveLink: 'https://drive.google.com/drive/folders/xxx6' },

            ]
          },
          {
            id: 'mechatronics-s4-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'mech-s4-t2-1', name: 'التدريب الصناعي', nameAr: 'التدريب الصناعي', driveLink: 'https://drive.google.com/drive/folders/8abc123' },
              { id: 'mech-s4-t2-2', name: 'إدارة الجودة', nameAr: 'إدارة الجودة', driveLink: 'https://drive.google.com/drive/folders/8def456' },
              { id: 'mech-s4-t2-3', name: 'التطوير المستمر', nameAr: 'التطوير المستمر', driveLink: 'https://drive.google.com/drive/folders/8ghi789' },
              { id: 'mech-s4-t2-4', name: 'الابتكار التقني', nameAr: 'الابتكار التقني', driveLink: 'https://drive.google.com/drive/folders/8jkl012' },
              { id: 'mech-s4-t2-5', name: 'الحوسبة السحابية', nameAr: 'الحوسبة السحابية', driveLink: 'https://drive.google.com/drive/folders/8mno345' },
              { id: 'mech-s4-t2-6', name: 'تطوير المنتجات', nameAr: 'تطوير المنتجات', driveLink: 'https://drive.google.com/drive/folders/8pqr678' },
              { id: 'mech-s4-t2-7', name: 'الاستدامة البيئية', nameAr: 'الاستدامة البيئية', driveLink: 'https://drive.google.com/drive/folders/8stu901' },
              { id: 'mech-s4-t2-8', name: 'عرض مشروع التخرج', nameAr: 'عرض مشروع التخرج', driveLink: 'https://drive.google.com/drive/folders/8vwx234' },
              { id: 'mech-s4-t2-9', name: 'التسويق التقني', nameAr: 'التسويق التقني', driveLink: 'https://drive.google.com/drive/folders/8yz567' },
              { id: 'mech-s4-t2-10', name: 'التطوير المهني', nameAr: 'التطوير المهني', driveLink: 'https://drive.google.com/drive/folders/8abc890' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'autotronics',
    name: 'أوتوترونكس',
    nameAr: 'أوتوترونكس',
    icon: 'Car',
    color: 'from-green-600 to-green-800',
    description: 'الإلكترونيات وأنظمة التحكم في السيارات',
    descriptionAr: 'الإلكترونيات وأنظمة التحكم في السيارات',
    semesters: [
      {
        id: 'autotronics-semester-1',
        name: 'الفصل الدراسي الأول',
        nameAr: 'الفصل الدراسي الأول',
        terms: [
          {
            id: 'autotronics-s1-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'auto-s1-t1-1', name: 'أساسيات السيارات', nameAr: 'أساسيات السيارات', driveLink: 'https://drive.google.com/drive/folders/auto1abc123' },
              { id: 'auto-s1-t1-2', name: 'الرياضيات التطبيقية', nameAr: 'الرياضيات التطبيقية', driveLink: 'https://drive.google.com/drive/folders/auto1def456' },
              { id: 'auto-s1-t1-3', name: 'الفيزياء للسيارات', nameAr: 'الفيزياء للسيارات', driveLink: 'https://drive.google.com/drive/folders/auto1ghi789' },
              { id: 'auto-s1-t1-4', name: 'الرسم التقني', nameAr: 'الرسم التقني', driveLink: 'https://drive.google.com/drive/folders/auto1jkl012' },
              { id: 'auto-s1-t1-5', name: 'مقدمة في الأوتوترونكس', nameAr: 'مقدمة في الأوتوترونكس', driveLink: 'https://drive.google.com/drive/folders/auto1mno345' },
              { id: 'auto-s1-t1-6', name: 'اللغة الإنجليزية الفنية', nameAr: 'اللغة الإنجليزية الفنية', driveLink: 'https://drive.google.com/drive/folders/auto1pqr678' },
              { id: 'auto-s1-t1-7', name: 'أساسيات الكهرباء', nameAr: 'أساسيات الكهرباء', driveLink: 'https://drive.google.com/drive/folders/auto1stu901' },
              { id: 'auto-s1-t1-8', name: 'ورشة السيارات', nameAr: 'ورشة السيارات', driveLink: 'https://drive.google.com/drive/folders/auto1vwx234' },
              { id: 'auto-s1-t1-9', name: 'السلامة في المركبات', nameAr: 'السلامة في المركبات', driveLink: 'https://drive.google.com/drive/folders/auto1yz567' },
              { id: 'auto-s1-t1-10', name: 'مهارات الاتصال', nameAr: 'مهارات الاتصال', driveLink: 'https://drive.google.com/drive/folders/auto1abc890' }
            ]
          },
          {
            id: 'autotronics-s1-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'auto-s1-t2-1', name: 'محركات الاحتراق الداخلي', nameAr: 'محركات الاحتراق الداخلي', driveLink: 'https://drive.google.com/drive/folders/auto2abc123' },
              { id: 'auto-s1-t2-2', name: 'الدوائر الكهربائية للسيارات', nameAr: 'الدوائر الكهربائية للسيارات', driveLink: 'https://drive.google.com/drive/folders/auto2def456' },
              { id: 'auto-s1-t2-3', name: 'علم المواد للسيارات', nameAr: 'علم المواد للسيارات', driveLink: 'https://drive.google.com/drive/folders/auto2ghi789' },
              { id: 'auto-s1-t2-4', name: 'التصميم بالحاسوب', nameAr: 'التصميم بالحاسوب', driveLink: 'https://drive.google.com/drive/folders/auto2jkl012' },
              { id: 'auto-s1-t2-5', name: 'الإلكترونيات الأساسية', nameAr: 'الإلكترونيات الأساسية', driveLink: 'https://drive.google.com/drive/folders/auto2mno345' },
              { id: 'auto-s1-t2-6', name: 'البرمجة للسيارات', nameAr: 'البرمجة للسيارات', driveLink: 'https://drive.google.com/drive/folders/auto2pqr678' },
              { id: 'auto-s1-t2-7', name: 'الإحصاء التطبيقي', nameAr: 'الإحصاء التطبيقي', driveLink: 'https://drive.google.com/drive/folders/auto2stu901' },
              { id: 'auto-s1-t2-8', name: 'تطبيقات عملية', nameAr: 'تطبيقات عملية', driveLink: 'https://drive.google.com/drive/folders/auto2vwx234' },
              { id: 'auto-s1-t2-9', name: 'إدارة الورش', nameAr: 'إدارة الورش', driveLink: 'https://drive.google.com/drive/folders/auto2yz567' },
              { id: 'auto-s1-t2-10', name: 'أخلاقيات المهنة', nameAr: 'أخلاقيات المهنة', driveLink: 'https://drive.google.com/drive/folders/auto2abc890' }
            ]
          }
        ]
      },
      {
        id: 'autotronics-semester-2',
        name: 'الفصل الدراسي الثاني',
        nameAr: 'الفصل الدراسي الثاني',
        terms: [
          {
            id: 'autotronics-s2-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'auto-s2-t1-1', name: 'أنظمة الوقود', nameAr: 'أنظمة الوقود', driveLink: 'https://drive.google.com/drive/folders/auto3abc123' },
              { id: 'auto-s2-t1-2', name: 'أنظمة الإشعال', nameAr: 'أنظمة الإشعال', driveLink: 'https://drive.google.com/drive/folders/auto3def456' },
              { id: 'auto-s2-t1-3', name: 'أنظمة التبريد', nameAr: 'أنظمة التبريد', driveLink: 'https://drive.google.com/drive/folders/auto3ghi789' },
              { id: 'auto-s2-t1-4', name: 'أنظمة التشحيم', nameAr: 'أنظمة التشحيم', driveLink: 'https://drive.google.com/drive/folders/auto3jkl012' },
              { id: 'auto-s2-t1-5', name: 'الإلكترونيات المتقدمة', nameAr: 'الإلكترونيات المتقدمة', driveLink: 'https://drive.google.com/drive/folders/auto3mno345' },
              { id: 'auto-s2-t1-6', name: 'المتحكمات الدقيقة', nameAr: 'المتحكمات الدقيقة', driveLink: 'https://drive.google.com/drive/folders/auto3pqr678' },
              { id: 'auto-s2-t1-7', name: 'أنظمة التحكم', nameAr: 'أنظمة التحكم', driveLink: 'https://drive.google.com/drive/folders/auto3stu901' },
              { id: 'auto-s2-t1-8', name: 'المختبرات العملية', nameAr: 'المختبرات العملية', driveLink: 'https://drive.google.com/drive/folders/auto3vwx234' },
              { id: 'auto-s2-t1-9', name: 'أنظمة العادم', nameAr: 'أنظمة العادم', driveLink: 'https://drive.google.com/drive/folders/auto3yz567' },
              { id: 'auto-s2-t1-10', name: 'الحساسات والمشغلات', nameAr: 'الحساسات والمشغلات', driveLink: 'https://drive.google.com/drive/folders/auto3abc890' }
            ]
          },
          {
            id: 'autotronics-s2-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'auto-s2-t2-1', name: 'أنظمة النقل', nameAr: 'أنظمة النقل', driveLink: 'https://drive.google.com/drive/folders/auto4abc123' },
              { id: 'auto-s2-t2-2', name: 'أنظمة الفرامل', nameAr: 'أنظمة الفرامل', driveLink: 'https://drive.google.com/drive/folders/auto4def456' },
              { id: 'auto-s2-t2-3', name: 'أنظمة التوجيه', nameAr: 'أنظمة التوجيه', driveLink: 'https://drive.google.com/drive/folders/auto4ghi789' },
              { id: 'auto-s2-t2-4', name: 'أنظمة التعليق', nameAr: 'أنظمة التعليق', driveLink: 'https://drive.google.com/drive/folders/auto4jkl012' },
              { id: 'auto-s2-t2-5', name: 'الشبكات في السيارات', nameAr: 'الشبكات في السيارات', driveLink: 'https://drive.google.com/drive/folders/auto4mno345' },
              { id: 'auto-s2-t2-6', name: 'برمجة وحدات التحكم', nameAr: 'برمجة وحدات التحكم', driveLink: 'https://drive.google.com/drive/folders/auto4pqr678' },
              { id: 'auto-s2-t2-7', name: 'التشخيص الإلكتروني', nameAr: 'التشخيص الإلكتروني', driveLink: 'https://drive.google.com/drive/folders/auto4stu901' },
              { id: 'auto-s2-t2-8', name: 'مشروع تطبيقي', nameAr: 'مشروع تطبيقي', driveLink: 'https://drive.google.com/drive/folders/auto4vwx234' },
              { id: 'auto-s2-t2-9', name: 'أنظمة الأمان', nameAr: 'أنظمة الأمان', driveLink: 'https://drive.google.com/drive/folders/auto4yz567' },
              { id: 'auto-s2-t2-10', name: 'أنظمة الراحة', nameAr: 'أنظمة الراحة', driveLink: 'https://drive.google.com/drive/folders/auto4abc890' }
            ]
          }
        ]
      },
      {
        id: 'autotronics-semester-3',
        name: 'الفصل الدراسي الثالث',
        nameAr: 'الفصل الدراسي الثالث',
        terms: [
          {
            id: 'autotronics-s3-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'auto-s3-t1-1', name: 'السيارات الهجينة', nameAr: 'السيارات الهجينة', driveLink: 'https://drive.google.com/drive/folders/auto5abc123' },
              { id: 'auto-s3-t1-2', name: 'السيارات الكهربائية', nameAr: 'السيارات الكهربائية', driveLink: 'https://drive.google.com/drive/folders/auto5def456' },
              { id: 'auto-s3-t1-3', name: 'أنظمة البطاريات', nameAr: 'أنظمة البطاريات', driveLink: 'https://drive.google.com/drive/folders/auto5ghi789' },
              { id: 'auto-s3-t1-4', name: 'المحركات الكهربائية', nameAr: 'المحركات الكهربائية', driveLink: 'https://drive.google.com/drive/folders/auto5jkl012' },
              { id: 'auto-s3-t1-5', name: 'أنظمة الشحن', nameAr: 'أنظمة الشحن', driveLink: 'https://drive.google.com/drive/folders/auto5mno345' },
              { id: 'auto-s3-t1-6', name: 'إدارة الطاقة', nameAr: 'إدارة الطاقة', driveLink: 'https://drive.google.com/drive/folders/auto5pqr678' },
              { id: 'auto-s3-t1-7', name: 'أنظمة الاستشعار المتقدمة', nameAr: 'أنظمة الاستشعار المتقدمة', driveLink: 'https://drive.google.com/drive/folders/auto5stu901' },
              { id: 'auto-s3-t1-8', name: 'مشروع متقدم', nameAr: 'مشروع متقدم', driveLink: 'https://drive.google.com/drive/folders/auto5vwx234' },
              { id: 'auto-s3-t1-9', name: 'أنظمة المساعدة للسائق', nameAr: 'أنظمة المساعدة للسائق', driveLink: 'https://drive.google.com/drive/folders/auto5yz567' },
              { id: 'auto-s3-t1-10', name: 'الاتصالات اللاسلكية', nameAr: 'الاتصالات اللاسلكية', driveLink: 'https://drive.google.com/drive/folders/auto5abc890' }
            ]
          },
          {
            id: 'autotronics-s3-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'auto-s3-t2-1', name: 'السيارات ذاتية القيادة', nameAr: 'السيارات ذاتية القيادة', driveLink: 'https://drive.google.com/drive/folders/auto6abc123' },
              { id: 'auto-s3-t2-2', name: 'الذكاء الاصطناعي في السيارات', nameAr: 'الذكاء الاصطناعي في السيارات', driveLink: 'https://drive.google.com/drive/folders/auto6def456' },
              { id: 'auto-s3-t2-3', name: 'الرؤية الحاسوبية', nameAr: 'الرؤية الحاسوبية', driveLink: 'https://drive.google.com/drive/folders/auto6ghi789' },
              { id: 'auto-s3-t2-4', name: 'معالجة الإشارات', nameAr: 'معالجة الإشارات', driveLink: 'https://drive.google.com/drive/folders/auto6jkl012' },
              { id: 'auto-s3-t2-5', name: 'أنظمة الملاحة', nameAr: 'أنظمة الملاحة', driveLink: 'https://drive.google.com/drive/folders/auto6mno345' },
              { id: 'auto-s3-t2-6', name: 'تطوير البرمجيات', nameAr: 'تطوير البرمجيات', driveLink: 'https://drive.google.com/drive/folders/auto6pqr678' },
              { id: 'auto-s3-t2-7', name: 'أمن السيارات المتصلة', nameAr: 'أمن السيارات المتصلة', driveLink: 'https://drive.google.com/drive/folders/auto6stu901' },
              { id: 'auto-s3-t2-8', name: 'مشروع التخرج 1', nameAr: 'مشروع التخرج 1', driveLink: 'https://drive.google.com/drive/folders/auto6vwx234' },
              { id: 'auto-s3-t2-9', name: 'أنظمة المعلومات والترفيه', nameAr: 'أنظمة المعلومات والترفيه', driveLink: 'https://drive.google.com/drive/folders/auto6yz567' },
              { id: 'auto-s3-t2-10', name: 'التشخيص المتقدم', nameAr: 'التشخيص المتقدم', driveLink: 'https://drive.google.com/drive/folders/auto6abc890' }
            ]
          }
        ]
      },
      {
        id: 'autotronics-semester-4',
        name: 'الفصل الدراسي الرابع',
        nameAr: 'الفصل الدراسي الرابع',
        terms: [
          {
            id: 'autotronics-s4-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'auto-s4-t1-1', name: 'تقنيات التصنيع المتقدمة', nameAr: 'تقنيات التصنيع المتقدمة', driveLink: 'https://drive.google.com/drive/folders/auto7abc123' },
              { id: 'auto-s4-t1-2', name: 'إدارة الجودة في السيارات', nameAr: 'إدارة الجودة في السيارات', driveLink: 'https://drive.google.com/drive/folders/auto7def456' },
              { id: 'auto-s4-t1-3', name: 'الاستدامة البيئية', nameAr: 'الاستدامة البيئية', driveLink: 'https://drive.google.com/drive/folders/auto7ghi789' },
              { id: 'auto-s4-t1-4', name: 'تطوير المنتجات', nameAr: 'تطوير المنتجات', driveLink: 'https://drive.google.com/drive/folders/auto7jkl012' },
              { id: 'auto-s4-t1-5', name: 'إنترنت الأشياء للسيارات', nameAr: 'إنترنت الأشياء للسيارات', driveLink: 'https://drive.google.com/drive/folders/auto7mno345' },
              { id: 'auto-s4-t1-6', name: 'تطبيقات الهاتف المحمول', nameAr: 'تطبيقات الهاتف المحمول', driveLink: 'https://drive.google.com/drive/folders/auto7pqr678' },
              { id: 'auto-s4-t1-7', name: 'الأمن السيبراني', nameAr: 'الأمن السيبراني', driveLink: 'https://drive.google.com/drive/folders/auto7stu901' },
              { id: 'auto-s4-t1-8', name: 'مشروع التخرج 2', nameAr: 'مشروع التخرج 2', driveLink: 'https://drive.google.com/drive/folders/auto7vwx234' },
              { id: 'auto-s4-t1-9', name: 'صناعة السيارات المستقبلية', nameAr: 'صناعة السيارات المستقبلية', driveLink: 'https://drive.google.com/drive/folders/auto7yz567' },
              { id: 'auto-s4-t1-10', name: 'ريادة الأعمال', nameAr: 'ريادة الأعمال', driveLink: 'https://drive.google.com/drive/folders/auto7abc890' }
            ]
          },
          {
            id: 'autotronics-s4-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'auto-s4-t2-1', name: 'التدريب الصناعي', nameAr: 'التدريب الصناعي', driveLink: 'https://drive.google.com/drive/folders/auto8abc123' },
              { id: 'auto-s4-t2-2', name: 'إدارة الورش المتقدمة', nameAr: 'إدارة الورش المتقدمة', driveLink: 'https://drive.google.com/drive/folders/auto8def456' },
              { id: 'auto-s4-t2-3', name: 'التطوير المستمر', nameAr: 'التطوير المستمر', driveLink: 'https://drive.google.com/drive/folders/auto8ghi789' },
              { id: 'auto-s4-t2-4', name: 'الابتكار في السيارات', nameAr: 'الابتكار في السيارات', driveLink: 'https://drive.google.com/drive/folders/auto8jkl012' },
              { id: 'auto-s4-t2-5', name: 'الحوسبة السحابية', nameAr: 'الحوسبة السحابية', driveLink: 'https://drive.google.com/drive/folders/auto8mno345' },
              { id: 'auto-s4-t2-6', name: 'تطوير الخدمات', nameAr: 'تطوير الخدمات', driveLink: 'https://drive.google.com/drive/folders/auto8pqr678' },
              { id: 'auto-s4-t2-7', name: 'المسؤولية البيئية', nameAr: 'المسؤولية البيئية', driveLink: 'https://drive.google.com/drive/folders/auto8stu901' },
              { id: 'auto-s4-t2-8', name: 'عرض مشروع التخرج', nameAr: 'عرض مشروع التخرج', driveLink: 'https://drive.google.com/drive/folders/auto8vwx234' },
              { id: 'auto-s4-t2-9', name: 'التسويق التقني', nameAr: 'التسويق التقني', driveLink: 'https://drive.google.com/drive/folders/auto8yz567' },
              { id: 'auto-s4-t2-10', name: 'التطوير المهني', nameAr: 'التطوير المهني', driveLink: 'https://drive.google.com/drive/folders/auto8abc890' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'renewable-energy',
    name: 'طاقة متجددة',
    nameAr: 'طاقة متجددة',
    icon: 'Zap',
    color: 'from-yellow-600 to-orange-600',
    description: 'أنظمة وتقنيات الطاقة المستدامة',
    descriptionAr: 'أنظمة وتقنيات الطاقة المستدامة',
    semesters: [
      {
        id: 'renewable-energy-semester-1',
        name: 'الفصل الدراسي الأول',
        nameAr: 'الفصل الدراسي الأول',
        terms: [
          {
            id: 'renewable-energy-s1-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'energy-s1-t1-1', name: 'مقدمة في الطاقة المتجددة', nameAr: 'مقدمة في الطاقة المتجددة', driveLink: 'https://drive.google.com/drive/folders/energy1abc123' },
              { id: 'energy-s1-t1-2', name: 'الرياضيات للطاقة', nameAr: 'الرياضيات للطاقة', driveLink: 'https://drive.google.com/drive/folders/energy1def456' },
              { id: 'energy-s1-t1-3', name: 'الفيزياء التطبيقية', nameAr: 'الفيزياء التطبيقية', driveLink: 'https://drive.google.com/drive/folders/energy1ghi789' },
              { id: 'energy-s1-t1-4', name: 'الكيمياء البيئية', nameAr: 'الكيمياء البيئية', driveLink: 'https://drive.google.com/drive/folders/energy1jkl012' },
              { id: 'energy-s1-t1-5', name: 'أساسيات الكهرباء', nameAr: 'أساسيات الكهرباء', driveLink: 'https://drive.google.com/drive/folders/energy1mno345' },
              { id: 'energy-s1-t1-6', name: 'اللغة الإنجليزية العلمية', nameAr: 'اللغة الإنجليزية العلمية', driveLink: 'https://drive.google.com/drive/folders/energy1pqr678' },
              { id: 'energy-s1-t1-7', name: 'أساسيات الحاسوب', nameAr: 'أساسيات الحاسوب', driveLink: 'https://drive.google.com/drive/folders/energy1stu901' },
              { id: 'energy-s1-t1-8', name: 'مختبر الطاقة', nameAr: 'مختبر الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy1vwx234' },
              { id: 'energy-s1-t1-9', name: 'السلامة البيئية', nameAr: 'السلامة البيئية', driveLink: 'https://drive.google.com/drive/folders/energy1yz567' },
              { id: 'energy-s1-t1-10', name: 'مهارات البحث', nameAr: 'مهارات البحث', driveLink: 'https://drive.google.com/drive/folders/energy1abc890' }
            ]
          },
          {
            id: 'renewable-energy-s1-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'energy-s1-t2-1', name: 'الطاقة الشمسية الأساسية', nameAr: 'الطاقة الشمسية الأساسية', driveLink: 'https://drive.google.com/drive/folders/energy2abc123' },
              { id: 'energy-s1-t2-2', name: 'طاقة الرياح الأساسية', nameAr: 'طاقة الرياح الأساسية', driveLink: 'https://drive.google.com/drive/folders/energy2def456' },
              { id: 'energy-s1-t2-3', name: 'الطاقة المائية', nameAr: 'الطاقة المائية', driveLink: 'https://drive.google.com/drive/folders/energy2ghi789' },
              { id: 'energy-s1-t2-4', name: 'الطاقة الحيوية', nameAr: 'الطاقة الحيوية', driveLink: 'https://drive.google.com/drive/folders/energy2jkl012' },
              { id: 'energy-s1-t2-5', name: 'الدوائر الكهربائية', nameAr: 'الدوائر الكهربائية', driveLink: 'https://drive.google.com/drive/folders/energy2mno345' },
              { id: 'energy-s1-t2-6', name: 'البرمجة الأساسية', nameAr: 'البرمجة الأساسية', driveLink: 'https://drive.google.com/drive/folders/energy2pqr678' },
              { id: 'energy-s1-t2-7', name: 'الإحصاء التطبيقي', nameAr: 'الإحصاء التطبيقي', driveLink: 'https://drive.google.com/drive/folders/energy2stu901' },
              { id: 'energy-s1-t2-8', name: 'تطبيقات عملية', nameAr: 'تطبيقات عملية', driveLink: 'https://drive.google.com/drive/folders/energy2vwx234' },
              { id: 'energy-s1-t2-9', name: 'إدارة الطاقة', nameAr: 'إدارة الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy2yz567' },
              { id: 'energy-s1-t2-10', name: 'أخلاقيات البيئة', nameAr: 'أخلاقيات البيئة', driveLink: 'https://drive.google.com/drive/folders/energy2abc890' }
            ]
          }
        ]
      },
      {
        id: 'renewable-energy-semester-2',
        name: 'الفصل الدراسي الثاني',
        nameAr: 'الفصل الدراسي الثاني',
        terms: [
          {
            id: 'renewable-energy-s2-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'energy-s2-t1-1', name: 'الخلايا الشمسية', nameAr: 'الخلايا الشمسية', driveLink: 'https://drive.google.com/drive/folders/energy3abc123' },
              { id: 'energy-s2-t1-2', name: 'توربينات الرياح', nameAr: 'توربينات الرياح', driveLink: 'https://drive.google.com/drive/folders/energy3def456' },
              { id: 'energy-s2-t1-3', name: 'أنظمة تخزين الطاقة', nameAr: 'أنظمة تخزين الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy3ghi789' },
              { id: 'energy-s2-t1-4', name: 'البطاريات والمراكم', nameAr: 'البطاريات والمراكم', driveLink: 'https://drive.google.com/drive/folders/energy3jkl012' },
              { id: 'energy-s2-t1-5', name: 'الإلكترونيات القوية', nameAr: 'الإلكترونيات القوية', driveLink: 'https://drive.google.com/drive/folders/energy3mno345' },
              { id: 'energy-s2-t1-6', name: 'المتحكمات الدقيقة', nameAr: 'المتحكمات الدقيقة', driveLink: 'https://drive.google.com/drive/folders/energy3pqr678' },
              { id: 'energy-s2-t1-7', name: 'أنظمة التحكم', nameAr: 'أنظمة التحكم', driveLink: 'https://drive.google.com/drive/folders/energy3stu901' },
              { id: 'energy-s2-t1-8', name: 'المختبرات المتقدمة', nameAr: 'المختبرات المتقدمة', driveLink: 'https://drive.google.com/drive/folders/energy3vwx234' },
              { id: 'energy-s2-t1-9', name: 'كفاءة الطاقة', nameAr: 'كفاءة الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy3yz567' },
              { id: 'energy-s2-t1-10', name: 'الحساسات والقياس', nameAr: 'الحساسات والقياس', driveLink: 'https://drive.google.com/drive/folders/energy3abc890' }
            ]
          },
          {
            id: 'renewable-energy-s2-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'energy-s2-t2-1', name: 'أنظمة الطاقة الشمسية', nameAr: 'أنظمة الطاقة الشمسية', driveLink: 'https://drive.google.com/drive/folders/energy4abc123' },
              { id: 'energy-s2-t2-2', name: 'مزارع الرياح', nameAr: 'مزارع الرياح', driveLink: 'https://drive.google.com/drive/folders/energy4def456' },
              { id: 'energy-s2-t2-3', name: 'الشبكات الذكية', nameAr: 'الشبكات الذكية', driveLink: 'https://drive.google.com/drive/folders/energy4ghi789' },
              { id: 'energy-s2-t2-4', name: 'محولات الطاقة', nameAr: 'محولات الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy4jkl012' },
              { id: 'energy-s2-t2-5', name: 'الشبكات الكهربائية', nameAr: 'الشبكات الكهربائية', driveLink: 'https://drive.google.com/drive/folders/energy4mno345' },
              { id: 'energy-s2-t2-6', name: 'برمجة أنظمة الطاقة', nameAr: 'برمجة أنظمة الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy4pqr678' },
              { id: 'energy-s2-t2-7', name: 'التشخيص والصيانة', nameAr: 'التشخيص والصيانة', driveLink: 'https://drive.google.com/drive/folders/energy4stu901' },
              { id: 'energy-s2-t2-8', name: 'مشروع تطبيقي', nameAr: 'مشروع تطبيقي', driveLink: 'https://drive.google.com/drive/folders/energy4vwx234' },
              { id: 'energy-s2-t2-9', name: 'الأمان في أنظمة الطاقة', nameAr: 'الأمان في أنظمة الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy4yz567' },
              { id: 'energy-s2-t2-10', name: 'مراقبة الأداء', nameAr: 'مراقبة الأداء', driveLink: 'https://drive.google.com/drive/folders/energy4abc890' }
            ]
          }
        ]
      },
      {
        id: 'renewable-energy-semester-3',
        name: 'الفصل الدراسي الثالث',
        nameAr: 'الفصل الدراسي الثالث',
        terms: [
          {
            id: 'renewable-energy-s3-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'energy-s3-t1-1', name: 'الطاقة الشمسية المركزة', nameAr: 'الطاقة الشمسية المركزة', driveLink: 'https://drive.google.com/drive/folders/energy5abc123' },
              { id: 'energy-s3-t1-2', name: 'طاقة الرياح البحرية', nameAr: 'طاقة الرياح البحرية', driveLink: 'https://drive.google.com/drive/folders/energy5def456' },
              { id: 'energy-s3-t1-3', name: 'الطاقة الحرارية الأرضية', nameAr: 'الطاقة الحرارية الأرضية', driveLink: 'https://drive.google.com/drive/folders/energy5ghi789' },
              { id: 'energy-s3-t1-4', name: 'طاقة المحيطات', nameAr: 'طاقة المحيطات', driveLink: 'https://drive.google.com/drive/folders/energy5jkl012' },
              { id: 'energy-s3-t1-5', name: 'الهيدروجين الأخضر', nameAr: 'الهيدروجين الأخضر', driveLink: 'https://drive.google.com/drive/folders/energy5mno345' },
              { id: 'energy-s3-t1-6', name: 'خلايا الوقود', nameAr: 'خلايا الوقود', driveLink: 'https://drive.google.com/drive/folders/energy5pqr678' },
              { id: 'energy-s3-t1-7', name: 'الذكاء الاصطناعي في الطاقة', nameAr: 'الذكاء الاصطناعي في الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy5stu901' },
              { id: 'energy-s3-t1-8', name: 'مشروع متقدم', nameAr: 'مشروع متقدم', driveLink: 'https://drive.google.com/drive/folders/energy5vwx234' },
              { id: 'energy-s3-t1-9', name: 'الأتمتة في الطاقة', nameAr: 'الأتمتة في الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy5yz567' },
              { id: 'energy-s3-t1-10', name: 'تحليل البيانات', nameAr: 'تحليل البيانات', driveLink: 'https://drive.google.com/drive/folders/energy5abc890' }
            ]
          },
          {
            id: 'renewable-energy-s3-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'energy-s3-t2-1', name: 'أنظمة الطاقة الهجينة', nameAr: 'أنظمة الطاقة الهجينة', driveLink: 'https://drive.google.com/drive/folders/energy6abc123' },
              { id: 'energy-s3-t2-2', name: 'التحكم الذكي', nameAr: 'التحكم الذكي', driveLink: 'https://drive.google.com/drive/folders/energy6def456' },
              { id: 'energy-s3-t2-3', name: 'تعلم الآلة', nameAr: 'تعلم الآلة', driveLink: 'https://drive.google.com/drive/folders/energy6ghi789' },
              { id: 'energy-s3-t2-4', name: 'المحاكاة والنمذجة', nameAr: 'المحاكاة والنمذجة', driveLink: 'https://drive.google.com/drive/folders/energy6jkl012' },
              { id: 'energy-s3-t2-5', name: 'الشبكات الذكية المتقدمة', nameAr: 'الشبكات الذكية المتقدمة', driveLink: 'https://drive.google.com/drive/folders/energy6mno345' },
              { id: 'energy-s3-t2-6', name: 'تطوير التطبيقات', nameAr: 'تطوير التطبيقات', driveLink: 'https://drive.google.com/drive/folders/energy6pqr678' },
              { id: 'energy-s3-t2-7', name: 'معالجة الإشارات', nameAr: 'معالجة الإشارات', driveLink: 'https://drive.google.com/drive/folders/energy6stu901' },
              { id: 'energy-s3-t2-8', name: 'مشروع التخرج 1', nameAr: 'مشروع التخرج 1', driveLink: 'https://drive.google.com/drive/folders/energy6vwx234' },
              { id: 'energy-s3-t2-9', name: 'أنظمة التخزين المتقدمة', nameAr: 'أنظمة التخزين المتقدمة', driveLink: 'https://drive.google.com/drive/folders/energy6yz567' },
              { id: 'energy-s3-t2-10', name: 'التحليل الاقتصادي', nameAr: 'التحليل الاقتصادي', driveLink: 'https://drive.google.com/drive/folders/energy6abc890' }
            ]
          }
        ]
      },
      {
        id: 'renewable-energy-semester-4',
        name: 'الفصل الدراسي الرابع',
        nameAr: 'الفصل الدراسي الرابع',
        terms: [
          {
            id: 'renewable-energy-s4-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'energy-s4-t1-1', name: 'تقنيات الطاقة المستقبلية', nameAr: 'تقنيات الطاقة المستقبلية', driveLink: 'https://drive.google.com/drive/folders/energy7abc123' },
              { id: 'energy-s4-t1-2', name: 'إدارة مشاريع الطاقة', nameAr: 'إدارة مشاريع الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy7def456' },
              { id: 'energy-s4-t1-3', name: 'الاستدامة البيئية', nameAr: 'الاستدامة البيئية', driveLink: 'https://drive.google.com/drive/folders/energy7ghi789' },
              { id: 'energy-s4-t1-4', name: 'تطوير المنتجات', nameAr: 'تطوير المنتجات', driveLink: 'https://drive.google.com/drive/folders/energy7jkl012' },
              { id: 'energy-s4-t1-5', name: 'إنترنت الأشياء للطاقة', nameAr: 'إنترنت الأشياء للطاقة', driveLink: 'https://drive.google.com/drive/folders/energy7mno345' },
              { id: 'energy-s4-t1-6', name: 'تطبيقات الهاتف المحمول', nameAr: 'تطبيقات الهاتف المحمول', driveLink: 'https://drive.google.com/drive/folders/energy7pqr678' },
              { id: 'energy-s4-t1-7', name: 'الأمن السيبراني', nameAr: 'الأمن السيبراني', driveLink: 'https://drive.google.com/drive/folders/energy7stu901' },
              { id: 'energy-s4-t1-8', name: 'مشروع التخرج 2', nameAr: 'مشروع التخرج 2', driveLink: 'https://drive.google.com/drive/folders/energy7vwx234' },
              { id: 'energy-s4-t1-9', name: 'الطاقة والمدن الذكية', nameAr: 'الطاقة والمدن الذكية', driveLink: 'https://drive.google.com/drive/folders/energy7yz567' },
              { id: 'energy-s4-t1-10', name: 'ريادة الأعمال', nameAr: 'ريادة الأعمال', driveLink: 'https://drive.google.com/drive/folders/energy7abc890' }
            ]
          },
          {
            id: 'renewable-energy-s4-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'energy-s4-t2-1', name: 'التدريب الصناعي', nameAr: 'التدريب الصناعي', driveLink: 'https://drive.google.com/drive/folders/energy8abc123' },
              { id: 'energy-s4-t2-2', name: 'إدارة الجودة', nameAr: 'إدارة الجودة', driveLink: 'https://drive.google.com/drive/folders/energy8def456' },
              { id: 'energy-s4-t2-3', name: 'التطوير المستمر', nameAr: 'التطوير المستمر', driveLink: 'https://drive.google.com/drive/folders/energy8ghi789' },
              { id: 'energy-s4-t2-4', name: 'الابتكار في الطاقة', nameAr: 'الابتكار في الطاقة', driveLink: 'https://drive.google.com/drive/folders/energy8jkl012' },
              { id: 'energy-s4-t2-5', name: 'الحوسبة السحابية', nameAr: 'الحوسبة السحابية', driveLink: 'https://drive.google.com/drive/folders/energy8mno345' },
              { id: 'energy-s4-t2-6', name: 'تطوير الحلول', nameAr: 'تطوير الحلول', driveLink: 'https://drive.google.com/drive/folders/energy8pqr678' },
              { id: 'energy-s4-t2-7', name: 'المسؤولية البيئية', nameAr: 'المسؤولية البيئية', driveLink: 'https://drive.google.com/drive/folders/energy8stu901' },
              { id: 'energy-s4-t2-8', name: 'عرض مشروع التخرج', nameAr: 'عرض مشروع التخرج', driveLink: 'https://drive.google.com/drive/folders/energy8vwx234' },
              { id: 'energy-s4-t2-9', name: 'التسويق التقني', nameAr: 'التسويق التقني', driveLink: 'https://drive.google.com/drive/folders/energy8yz567' },
              { id: 'energy-s4-t2-10', name: 'التطوير المهني', nameAr: 'التطوير المهني', driveLink: 'https://drive.google.com/drive/folders/energy8abc890' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'refrigeration',
    name: 'تبريد وتكييف',
    nameAr: 'تبريد وتكييف',
    icon: 'Thermometer',
    color: 'from-purple-600 to-purple-800',
    description: 'أنظمة التبريد وتقنيات التحكم في المناخ',
    descriptionAr: 'أنظمة التبريد وتقنيات التحكم في المناخ',
    semesters: [
      {
        id: 'refrigeration-semester-1',
        name: 'الفصل الدراسي الأول',
        nameAr: 'الفصل الدراسي الأول',
        terms: [
          {
            id: 'refrigeration-s1-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'refrig-s1-t1-1', name: 'أساسيات التبريد والتكييف', nameAr: 'أساسيات التبريد والتكييف', driveLink: 'https://drive.google.com/drive/folders/refrig1abc123' },
              { id: 'refrig-s1-t1-2', name: 'الرياضيات التطبيقية', nameAr: 'الرياضيات التطبيقية', driveLink: 'https://drive.google.com/drive/folders/refrig1def456' },
              { id: 'refrig-s1-t1-3', name: 'الفيزياء الحرارية', nameAr: 'الفيزياء الحرارية', driveLink: 'https://drive.google.com/drive/folders/refrig1ghi789' },
              { id: 'refrig-s1-t1-4', name: 'الكيمياء التطبيقية', nameAr: 'الكيمياء التطبيقية', driveLink: 'https://drive.google.com/drive/folders/refrig1jkl012' },
              { id: 'refrig-s1-t1-5', name: 'الرسم الهندسي', nameAr: 'الرسم الهندسي', driveLink: 'https://drive.google.com/drive/folders/refrig1mno345' },
              { id: 'refrig-s1-t1-6', name: 'اللغة الإنجليزية التقنية', nameAr: 'اللغة الإنجليزية التقنية', driveLink: 'https://drive.google.com/drive/folders/refrig1pqr678' },
              { id: 'refrig-s1-t1-7', name: 'أساسيات الكهرباء', nameAr: 'أساسيات الكهرباء', driveLink: 'https://drive.google.com/drive/folders/refrig1stu901' },
              { id: 'refrig-s1-t1-8', name: 'ورشة التبريد', nameAr: 'ورشة التبريد', driveLink: 'https://drive.google.com/drive/folders/refrig1vwx234' },
              { id: 'refrig-s1-t1-9', name: 'السلامة المهنية', nameAr: 'السلامة المهنية', driveLink: 'https://drive.google.com/drive/folders/refrig1yz567' },
              { id: 'refrig-s1-t1-10', name: 'مهارات التواصل', nameAr: 'مهارات التواصل', driveLink: 'https://drive.google.com/drive/folders/refrig1abc890' }
            ]
          },
          {
            id: 'refrigeration-s1-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'refrig-s1-t2-1', name: 'الديناميكا الحرارية', nameAr: 'الديناميكا الحرارية', driveLink: 'https://drive.google.com/drive/folders/refrig2abc123' },
              { id: 'refrig-s1-t2-2', name: 'انتقال الحرارة', nameAr: 'انتقال الحرارة', driveLink: 'https://drive.google.com/drive/folders/refrig2def456' },
              { id: 'refrig-s1-t2-3', name: 'ميكانيكا الموائع', nameAr: 'ميكانيكا الموائع', driveLink: 'https://drive.google.com/drive/folders/refrig2ghi789' },
              { id: 'refrig-s1-t2-4', name: 'علم المواد', nameAr: 'علم المواد', driveLink: 'https://drive.google.com/drive/folders/refrig2jkl012' },
              { id: 'refrig-s1-t2-5', name: 'الدوائر الكهربائية', nameAr: 'الدوائر الكهربائية', driveLink: 'https://drive.google.com/drive/folders/refrig2mno345' },
              { id: 'refrig-s1-t2-6', name: 'البرمجة الأساسية', nameAr: 'البرمجة الأساسية', driveLink: 'https://drive.google.com/drive/folders/refrig2pqr678' },
              { id: 'refrig-s1-t2-7', name: 'الإحصاء التطبيقي', nameAr: 'الإحصاء التطبيقي', driveLink: 'https://drive.google.com/drive/folders/refrig2stu901' },
              { id: 'refrig-s1-t2-8', name: 'تطبيقات عملية', nameAr: 'تطبيقات عملية', driveLink: 'https://drive.google.com/drive/folders/refrig2vwx234' },
              { id: 'refrig-s1-t2-9', name: 'إدارة المشاريع', nameAr: 'إدارة المشاريع', driveLink: 'https://drive.google.com/drive/folders/refrig2yz567' },
              { id: 'refrig-s1-t2-10', name: 'أخلاقيات المهنة', nameAr: 'أخلاقيات المهنة', driveLink: 'https://drive.google.com/drive/folders/refrig2abc890' }
            ]
          }
        ]
      },
      {
        id: 'refrigeration-semester-2',
        name: 'الفصل الدراسي الثاني',
        nameAr: 'الفصل الدراسي الثاني',
        terms: [
          {
            id: 'refrigeration-s2-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'refrig-s2-t1-1', name: 'دورات التبريد', nameAr: 'دورات التبريد', driveLink: 'https://drive.google.com/drive/folders/refrig3abc123' },
              { id: 'refrig-s2-t1-2', name: 'المبردات والغازات', nameAr: 'المبردات والغازات', driveLink: 'https://drive.google.com/drive/folders/refrig3def456' },
              { id: 'refrig-s2-t1-3', name: 'الضواغط', nameAr: 'الضواغط', driveLink: 'https://drive.google.com/drive/folders/refrig3ghi789' },
              { id: 'refrig-s2-t1-4', name: 'المكثفات', nameAr: 'المكثفات', driveLink: 'https://drive.google.com/drive/folders/refrig3jkl012' },
              { id: 'refrig-s2-t1-5', name: 'المبخرات', nameAr: 'المبخرات', driveLink: 'https://drive.google.com/drive/folders/refrig3mno345' },
              { id: 'refrig-s2-t1-6', name: 'أجهزة التحكم', nameAr: 'أجهزة التحكم', driveLink: 'https://drive.google.com/drive/folders/refrig3pqr678' },
              { id: 'refrig-s2-t1-7', name: 'أنظمة التحكم', nameAr: 'أنظمة التحكم', driveLink: 'https://drive.google.com/drive/folders/refrig3stu901' },
              { id: 'refrig-s2-t1-8', name: 'المختبرات العملية', nameAr: 'المختبرات العملية', driveLink: 'https://drive.google.com/drive/folders/refrig3vwx234' },
              { id: 'refrig-s2-t1-9', name: 'الصيانة الوقائية', nameAr: 'الصيانة الوقائية', driveLink: 'https://drive.google.com/drive/folders/refrig3yz567' },
              { id: 'refrig-s2-t1-10', name: 'الحساسات والقياس', nameAr: 'الحساسات والقياس', driveLink: 'https://drive.google.com/drive/folders/refrig3abc890' }
            ]
          },
          {
            id: 'refrigeration-s2-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'refrig-s2-t2-1', name: 'أنظمة التكييف المركزي', nameAr: 'أنظمة التكييف المركزي', driveLink: 'https://drive.google.com/drive/folders/refrig4abc123' },
              { id: 'refrig-s2-t2-2', name: 'أنظمة التكييف المنفصل', nameAr: 'أنظمة التكييف المنفصل', driveLink: 'https://drive.google.com/drive/folders/refrig4def456' },
              { id: 'refrig-s2-t2-3', name: 'التهوية والتنقية', nameAr: 'التهوية والتنقية', driveLink: 'https://drive.google.com/drive/folders/refrig4ghi789' },
              { id: 'refrig-s2-t2-4', name: 'التحكم في الرطوبة', nameAr: 'التحكم في الرطوبة', driveLink: 'https://drive.google.com/drive/folders/refrig4jkl012' },
              { id: 'refrig-s2-t2-5', name: 'الشبكات والأنابيب', nameAr: 'الشبكات والأنابيب', driveLink: 'https://drive.google.com/drive/folders/refrig4mno345' },
              { id: 'refrig-s2-t2-6', name: 'برمجة أنظمة التحكم', nameAr: 'برمجة أنظمة التحكم', driveLink: 'https://drive.google.com/drive/folders/refrig4pqr678' },
              { id: 'refrig-s2-t2-7', name: 'التشخيص والإصلاح', nameAr: 'التشخيص والإصلاح', driveLink: 'https://drive.google.com/drive/folders/refrig4stu901' },
              { id: 'refrig-s2-t2-8', name: 'مشروع تطبيقي', nameAr: 'مشروع تطبيقي', driveLink: 'https://drive.google.com/drive/folders/refrig4vwx234' },
              { id: 'refrig-s2-t2-9', name: 'كفاءة الطاقة', nameAr: 'كفاءة الطاقة', driveLink: 'https://drive.google.com/drive/folders/refrig4yz567' },
              { id: 'refrig-s2-t2-10', name: 'الأمان والبيئة', nameAr: 'الأمان والبيئة', driveLink: 'https://drive.google.com/drive/folders/refrig4abc890' }
            ]
          }
        ]
      },
      {
        id: 'refrigeration-semester-3',
        name: 'الفصل الدراسي الثالث',
        nameAr: 'الفصل الدراسي الثالث',
        terms: [
          {
            id: 'refrigeration-s3-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'refrig-s3-t1-1', name: 'التبريد الصناعي', nameAr: 'التبريد الصناعي', driveLink: 'https://drive.google.com/drive/folders/refrig5abc123' },
              { id: 'refrig-s3-t1-2', name: 'التبريد التجاري', nameAr: 'التبريد التجاري', driveLink: 'https://drive.google.com/drive/folders/refrig5def456' },
              { id: 'refrig-s3-t1-3', name: 'أنظمة التبريد المتقدمة', nameAr: 'أنظمة التبريد المتقدمة', driveLink: 'https://drive.google.com/drive/folders/refrig5ghi789' },
              { id: 'refrig-s3-t1-4', name: 'التحكم الذكي', nameAr: 'التحكم الذكي', driveLink: 'https://drive.google.com/drive/folders/refrig5jkl012' },
              { id: 'refrig-s3-t1-5', name: 'أنظمة الاتصالات', nameAr: 'أنظمة الاتصالات', driveLink: 'https://drive.google.com/drive/folders/refrig5mno345' },
              { id: 'refrig-s3-t1-6', name: 'البرمجة المتقدمة', nameAr: 'البرمجة المتقدمة', driveLink: 'https://drive.google.com/drive/folders/refrig5pqr678' },
              { id: 'refrig-s3-t1-7', name: 'معالجة الإشارات', nameAr: 'معالجة الإشارات', driveLink: 'https://drive.google.com/drive/folders/refrig5stu901' },
              { id: 'refrig-s3-t1-8', name: 'مشروع متقدم', nameAr: 'مشروع متقدم', driveLink: 'https://drive.google.com/drive/folders/refrig5vwx234' },
              { id: 'refrig-s3-t1-9', name: 'الأتمتة الصناعية', nameAr: 'الأتمتة الصناعية', driveLink: 'https://drive.google.com/drive/folders/refrig5yz567' },
              { id: 'refrig-s3-t1-10', name: 'مراقبة الأداء', nameAr: 'مراقبة الأداء', driveLink: 'https://drive.google.com/drive/folders/refrig5abc890' }
            ]
          },
          {
            id: 'refrigeration-s3-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'refrig-s3-t2-1', name: 'أنظمة التبريد البيئية', nameAr: 'أنظمة التبريد البيئية', driveLink: 'https://drive.google.com/drive/folders/refrig6abc123' },
              { id: 'refrig-s3-t2-2', name: 'التحكم التكيفي', nameAr: 'التحكم التكيفي', driveLink: 'https://drive.google.com/drive/folders/refrig6def456' },
              { id: 'refrig-s3-t2-3', name: 'الذكاء الاصطناعي', nameAr: 'الذكاء الاصطناعي', driveLink: 'https://drive.google.com/drive/folders/refrig6ghi789' },
              { id: 'refrig-s3-t2-4', name: 'المحاكاة والنمذجة', nameAr: 'المحاكاة والنمذجة', driveLink: 'https://drive.google.com/drive/folders/refrig6jkl012' },
              { id: 'refrig-s3-t2-5', name: 'الشبكات الذكية', nameAr: 'الشبكات الذكية', driveLink: 'https://drive.google.com/drive/folders/refrig6mno345' },
              { id: 'refrig-s3-t2-6', name: 'تطوير التطبيقات', nameAr: 'تطوير التطبيقات', driveLink: 'https://drive.google.com/drive/folders/refrig6pqr678' },
              { id: 'refrig-s3-t2-7', name: 'تحليل البيانات', nameAr: 'تحليل البيانات', driveLink: 'https://drive.google.com/drive/folders/refrig6stu901' },
              { id: 'refrig-s3-t2-8', name: 'مشروع التخرج 1', nameAr: 'مشروع التخرج 1', driveLink: 'https://drive.google.com/drive/folders/refrig6vwx234' },
              { id: 'refrig-s3-t2-9', name: 'أنظمة التبريد المستدامة', nameAr: 'أنظمة التبريد المستدامة', driveLink: 'https://drive.google.com/drive/folders/refrig6yz567' },
              { id: 'refrig-s3-t2-10', name: 'التشخيص المتقدم', nameAr: 'التشخيص المتقدم', driveLink: 'https://drive.google.com/drive/folders/refrig6abc890' }
            ]
          }
        ]
      },
      {
        id: 'refrigeration-semester-4',
        name: 'الفصل الدراسي الرابع',
        nameAr: 'الفصل الدراسي الرابع',
        terms: [
          {
            id: 'refrigeration-s4-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'refrig-s4-t1-1', name: 'تقنيات التبريد المستقبلية', nameAr: 'تقنيات التبريد المستقبلية', driveLink: 'https://drive.google.com/drive/folders/refrig7abc123' },
              { id: 'refrig-s4-t1-2', name: 'إدارة مشاريع التبريد', nameAr: 'إدارة مشاريع التبريد', driveLink: 'https://drive.google.com/drive/folders/refrig7def456' },
              { id: 'refrig-s4-t1-3', name: 'الاستدامة البيئية', nameAr: 'الاستدامة البيئية', driveLink: 'https://drive.google.com/drive/folders/refrig7ghi789' },
              { id: 'refrig-s4-t1-4', name: 'تطوير المنتجات', nameAr: 'تطوير المنتجات', driveLink: 'https://drive.google.com/drive/folders/refrig7jkl012' },
              { id: 'refrig-s4-t1-5', name: 'إنترنت الأشياء', nameAr: 'إنترنت الأشياء', driveLink: 'https://drive.google.com/drive/folders/refrig7mno345' },
              { id: 'refrig-s4-t1-6', name: 'تطبيقات الهاتف المحمول', nameAr: 'تطبيقات الهاتف المحمول', driveLink: 'https://drive.google.com/drive/folders/refrig7pqr678' },
              { id: 'refrig-s4-t1-7', name: 'الأمن السيبراني', nameAr: 'الأمن السيبراني', driveLink: 'https://drive.google.com/drive/folders/refrig7stu901' },
              { id: 'refrig-s4-t1-8', name: 'مشروع التخرج 2', nameAr: 'مشروع التخرج 2', driveLink: 'https://drive.google.com/drive/folders/refrig7vwx234' },
              { id: 'refrig-s4-t1-9', name: 'التبريد والمباني الذكية', nameAr: 'التبريد والمباني الذكية', driveLink: 'https://drive.google.com/drive/folders/refrig7yz567' },
              { id: 'refrig-s4-t1-10', name: 'ريادة الأعمال', nameAr: 'ريادة الأعمال', driveLink: 'https://drive.google.com/drive/folders/refrig7abc890' }
            ]
          },
          {
            id: 'refrigeration-s4-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'refrig-s4-t2-1', name: 'التدريب الصناعي', nameAr: 'التدريب الصناعي', driveLink: 'https://drive.google.com/drive/folders/refrig8abc123' },
              { id: 'refrig-s4-t2-2', name: 'إدارة الجودة', nameAr: 'إدارة الجودة', driveLink: 'https://drive.google.com/drive/folders/refrig8def456' },
              { id: 'refrig-s4-t2-3', name: 'التطوير المستمر', nameAr: 'التطوير المستمر', driveLink: 'https://drive.google.com/drive/folders/refrig8ghi789' },
              { id: 'refrig-s4-t2-4', name: 'الابتكار في التبريد', nameAr: 'الابتكار في التبريد', driveLink: 'https://drive.google.com/drive/folders/refrig8jkl012' },
              { id: 'refrig-s4-t2-5', name: 'الحوسبة السحابية', nameAr: 'الحوسبة السحابية', driveLink: 'https://drive.google.com/drive/folders/refrig8mno345' },
              { id: 'refrig-s4-t2-6', name: 'تطوير الخدمات', nameAr: 'تطوير الخدمات', driveLink: 'https://drive.google.com/drive/folders/refrig8pqr678' },
              { id: 'refrig-s4-t2-7', name: 'المسؤولية البيئية', nameAr: 'المسؤولية البيئية', driveLink: 'https://drive.google.com/drive/folders/refrig8stu901' },
              { id: 'refrig-s4-t2-8', name: 'عرض مشروع التخرج', nameAr: 'عرض مشروع التخرج', driveLink: 'https://drive.google.com/drive/folders/refrig8vwx234' },
              { id: 'refrig-s4-t2-9', name: 'التسويق التقني', nameAr: 'التسويق التقني', driveLink: 'https://drive.google.com/drive/folders/refrig8yz567' },
              { id: 'refrig-s4-t2-10', name: 'التطوير المهني', nameAr: 'التطوير المهني', driveLink: 'https://drive.google.com/drive/folders/refrig8abc890' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'it',
    name: 'تكنولوجيا المعلومات',
    nameAr: 'تكنولوجيا المعلومات',
    icon: 'Monitor',
    color: 'from-indigo-600 to-indigo-800',
    description: 'تطوير البرمجيات وإدارة الشبكات وأمن المعلومات',
    descriptionAr: 'تطوير البرمجيات وإدارة الشبكات وأمن المعلومات',
    semesters: [
      {
        id: 'it-semester-1',
        name: 'الفصل الدراسي الأول',
        nameAr: 'الفصل الدراسي الأول',
        terms: [
          {
            id: 'it-s1-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'it-s1-t1-1', name: 'مقدمة في الحاسوب', nameAr: 'مقدمة في الحاسوب', driveLink: 'https://drive.google.com/drive/folders/it1abc123' },
              { id: 'it-s1-t1-2', name: 'الرياضيات المتقطعة', nameAr: 'الرياضيات المتقطعة', driveLink: 'https://drive.google.com/drive/folders/it1def456' },
              { id: 'it-s1-t1-3', name: 'أساسيات البرمجة', nameAr: 'أساسيات البرمجة', driveLink: 'https://drive.google.com/drive/folders/it1ghi789' },
              { id: 'it-s1-t1-4', name: 'منطق الحاسوب', nameAr: 'منطق الحاسوب', driveLink: 'https://drive.google.com/drive/folders/it1jkl012' },
              { id: 'it-s1-t1-5', name: 'أساسيات الشبكات', nameAr: 'أساسيات الشبكات', driveLink: 'https://drive.google.com/drive/folders/it1mno345' },
              { id: 'it-s1-t1-6', name: 'اللغة الإنجليزية التقنية', nameAr: 'اللغة الإنجليزية التقنية', driveLink: 'https://drive.google.com/drive/folders/it1pqr678' },
              { id: 'it-s1-t1-7', name: 'أساسيات الإلكترونيات', nameAr: 'أساسيات الإلكترونيات', driveLink: 'https://drive.google.com/drive/folders/it1stu901' },
              { id: 'it-s1-t1-8', name: 'مختبر الحاسوب', nameAr: 'مختبر الحاسوب', driveLink: 'https://drive.google.com/drive/folders/it1vwx234' },
              { id: 'it-s1-t1-9', name: 'أمن المعلومات الأساسي', nameAr: 'أمن المعلومات الأساسي', driveLink: 'https://drive.google.com/drive/folders/it1yz567' },
              { id: 'it-s1-t1-10', name: 'مهارات التواصل', nameAr: 'مهارات التواصل', driveLink: 'https://drive.google.com/drive/folders/it1abc890' }
            ]
          },
          {
            id: 'it-s1-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'it-s1-t2-1', name: 'البرمجة الشيئية', nameAr: 'البرمجة الشيئية', driveLink: 'https://drive.google.com/drive/folders/it2abc123' },
              { id: 'it-s1-t2-2', name: 'هياكل البيانات', nameAr: 'هياكل البيانات', driveLink: 'https://drive.google.com/drive/folders/it2def456' },
              { id: 'it-s1-t2-3', name: 'أنظمة التشغيل', nameAr: 'أنظمة التشغيل', driveLink: 'https://drive.google.com/drive/folders/it2ghi789' },
              { id: 'it-s1-t2-4', name: 'تصميم المنطق الرقمي', nameAr: 'تصميم المنطق الرقمي', driveLink: 'https://drive.google.com/drive/folders/it2jkl012' },
              { id: 'it-s1-t2-5', name: 'بروتوكولات الشبكات', nameAr: 'بروتوكولات الشبكات', driveLink: 'https://drive.google.com/drive/folders/it2mno345' },
              { id: 'it-s1-t2-6', name: 'قواعد البيانات الأساسية', nameAr: 'قواعد البيانات الأساسية', driveLink: 'https://drive.google.com/drive/folders/it2pqr678' },
              { id: 'it-s1-t2-7', name: 'الإحصاء والاحتمالات', nameAr: 'الإحصاء والاحتمالات', driveLink: 'https://drive.google.com/drive/folders/it2stu901' },
              { id: 'it-s1-t2-8', name: 'تطبيقات عملية', nameAr: 'تطبيقات عملية', driveLink: 'https://drive.google.com/drive/folders/it2vwx234' },
              { id: 'it-s1-t2-9', name: 'إدارة المشاريع', nameAr: 'إدارة المشاريع', driveLink: 'https://drive.google.com/drive/folders/it2yz567' },
              { id: 'it-s1-t2-10', name: 'أخلاقيات الحاسوب', nameAr: 'أخلاقيات الحاسوب', driveLink: 'https://drive.google.com/drive/folders/it2abc890' }
            ]
          }
        ]
      },
      {
        id: 'it-semester-2',
        name: 'الفصل الدراسي الثاني',
        nameAr: 'الفصل الدراسي الثاني',
        terms: [
          {
            id: 'it-s2-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'it-s2-t1-1', name: 'الخوارزميات', nameAr: 'الخوارزميات', driveLink: 'https://drive.google.com/drive/folders/it3abc123' },
              { id: 'it-s2-t1-2', name: 'تطوير الويب', nameAr: 'تطوير الويب', driveLink: 'https://drive.google.com/drive/folders/it3def456' },
              { id: 'it-s2-t1-3', name: 'إدارة الشبكات', nameAr: 'إدارة الشبكات', driveLink: 'https://drive.google.com/drive/folders/it3ghi789' },
              { id: 'it-s2-t1-4', name: 'معمارية الحاسوب', nameAr: 'معمارية الحاسوب', driveLink: 'https://drive.google.com/drive/folders/it3jkl012' },
              { id: 'it-s2-t1-5', name: 'قواعد البيانات المتقدمة', nameAr: 'قواعد البيانات المتقدمة', driveLink: 'https://drive.google.com/drive/folders/it3mno345' },
              { id: 'it-s2-t1-6', name: 'هندسة البرمجيات', nameAr: 'هندسة البرمجيات', driveLink: 'https://drive.google.com/drive/folders/it3pqr678' },
              { id: 'it-s2-t1-7', name: 'أمن الشبكات', nameAr: 'أمن الشبكات', driveLink: 'https://drive.google.com/drive/folders/it3stu901' },
              { id: 'it-s2-t1-8', name: 'المختبرات المتقدمة', nameAr: 'المختبرات المتقدمة', driveLink: 'https://drive.google.com/drive/folders/it3vwx234' },
              { id: 'it-s2-t1-9', name: 'تحليل النظم', nameAr: 'تحليل النظم', driveLink: 'https://drive.google.com/drive/folders/it3yz567' },
              { id: 'it-s2-t1-10', name: 'إدارة قواعد البيانات', nameAr: 'إدارة قواعد البيانات', driveLink: 'https://drive.google.com/drive/folders/it3abc890' }
            ]
          },
          {
            id: 'it-s2-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'it-s2-t2-1', name: 'تطوير التطبيقات', nameAr: 'تطوير التطبيقات', driveLink: 'https://drive.google.com/drive/folders/it4abc123' },
              { id: 'it-s2-t2-2', name: 'البرمجة المتقدمة', nameAr: 'البرمجة المتقدمة', driveLink: 'https://drive.google.com/drive/folders/it4def456' },
              { id: 'it-s2-t2-3', name: 'أمن النظم', nameAr: 'أمن النظم', driveLink: 'https://drive.google.com/drive/folders/it4ghi789' },
              { id: 'it-s2-t2-4', name: 'الحوسبة السحابية', nameAr: 'الحوسبة السحابية', driveLink: 'https://drive.google.com/drive/folders/it4jkl012' },
              { id: 'it-s2-t2-5', name: 'الشبكات اللاسلكية', nameAr: 'الشبكات اللاسلكية', driveLink: 'https://drive.google.com/drive/folders/it4mno345' },
              { id: 'it-s2-t2-6', name: 'تصميم واجهات المستخدم', nameAr: 'تصميم واجهات المستخدم', driveLink: 'https://drive.google.com/drive/folders/it4pqr678' },
              { id: 'it-s2-t2-7', name: 'اختبار البرمجيات', nameAr: 'اختبار البرمجيات', driveLink: 'https://drive.google.com/drive/folders/it4stu901' },
              { id: 'it-s2-t2-8', name: 'مشروع تطبيقي', nameAr: 'مشروع تطبيقي', driveLink: 'https://drive.google.com/drive/folders/it4vwx234' },
              { id: 'it-s2-t2-9', name: 'إدارة الخوادم', nameAr: 'إدارة الخوادم', driveLink: 'https://drive.google.com/drive/folders/it4yz567' },
              { id: 'it-s2-t2-10', name: 'ضمان الجودة', nameAr: 'ضمان الجودة', driveLink: 'https://drive.google.com/drive/folders/it4abc890' }
            ]
          }
        ]
      },
      {
        id: 'it-semester-3',
        name: 'الفصل الدراسي الثالث',
        nameAr: 'الفصل الدراسي الثالث',
        terms: [
          {
            id: 'it-s3-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'it-s3-t1-1', name: 'الذكاء الاصطناعي', nameAr: 'الذكاء الاصطناعي', driveLink: 'https://drive.google.com/drive/folders/it5abc123' },
              { id: 'it-s3-t1-2', name: 'تعلم الآلة', nameAr: 'تعلم الآلة', driveLink: 'https://drive.google.com/drive/folders/it5def456' },
              { id: 'it-s3-t1-3', name: 'البيانات الضخمة', nameAr: 'البيانات الضخمة', driveLink: 'https://drive.google.com/drive/folders/it5ghi789' },
              { id: 'it-s3-t1-4', name: 'الحوسبة المتوازية', nameAr: 'الحوسبة المتوازية', driveLink: 'https://drive.google.com/drive/folders/it5jkl012' },
              { id: 'it-s3-t1-5', name: 'إنترنت الأشياء', nameAr: 'إنترنت الأشياء', driveLink: 'https://drive.google.com/drive/folders/it5mno345' },
              { id: 'it-s3-t1-6', name: 'تطوير الألعاب', nameAr: 'تطوير الألعاب', driveLink: 'https://drive.google.com/drive/folders/it5pqr678' },
              { id: 'it-s3-t1-7', name: 'الأمن السيبراني المتقدم', nameAr: 'الأمن السيبراني المتقدم', driveLink: 'https://drive.google.com/drive/folders/it5stu901' },
              { id: 'it-s3-t1-8', name: 'مشروع متقدم', nameAr: 'مشروع متقدم', driveLink: 'https://drive.google.com/drive/folders/it5vwx234' },
              { id: 'it-s3-t1-9', name: 'الحوسبة الكمية', nameAr: 'الحوسبة الكمية', driveLink: 'https://drive.google.com/drive/folders/it5yz567' },
              { id: 'it-s3-t1-10', name: 'تحليل البيانات', nameAr: 'تحليل البيانات', driveLink: 'https://drive.google.com/drive/folders/it5abc890' }
            ]
          },
          {
            id: 'it-s3-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'it-s3-t2-1', name: 'الشبكات العصبية', nameAr: 'الشبكات العصبية', driveLink: 'https://drive.google.com/drive/folders/it6abc123' },
              { id: 'it-s3-t2-2', name: 'الرؤية الحاسوبية', nameAr: 'الرؤية الحاسوبية', driveLink: 'https://drive.google.com/drive/folders/it6def456' },
              { id: 'it-s3-t2-3', name: 'معالجة اللغات الطبيعية', nameAr: 'معالجة اللغات الطبيعية', driveLink: 'https://drive.google.com/drive/folders/it6ghi789' },
              { id: 'it-s3-t2-4', name: 'الحوسبة التطورية', nameAr: 'الحوسبة التطورية', driveLink: 'https://drive.google.com/drive/folders/it6jkl012' },
              { id: 'it-s3-t2-5', name: 'الأنظمة الموزعة', nameAr: 'الأنظمة الموزعة', driveLink: 'https://drive.google.com/drive/folders/it6mno345' },
              { id: 'it-s3-t2-6', name: 'تطوير التطبيقات المحمولة', nameAr: 'تطوير التطبيقات المحمول', driveLink: 'https://drive.google.com/drive/folders/it6pqr678' },
              { id: 'it-s3-t2-7', name: 'التشفير وأمن البيانات', nameAr: 'التشفير وأمن البيانات', driveLink: 'https://drive.google.com/drive/folders/it6stu901' },
              { id: 'it-s3-t2-8', name: 'مشروع التخرج 1', nameAr: 'مشروع التخرج 1', driveLink: 'https://drive.google.com/drive/folders/it6vwx234' },
              { id: 'it-s3-t2-9', name: 'البلوك تشين', nameAr: 'البلوك تشين', driveLink: 'https://drive.google.com/drive/folders/it6yz567' },
              { id: 'it-s3-t2-10', name: 'التحليل الجنائي الرقمي', nameAr: 'التحليل الجنائي الرقمي', driveLink: 'https://drive.google.com/drive/folders/it6abc890' }
            ]
          }
        ]
      },
      {
        id: 'it-semester-4',
        name: 'الفصل الدراسي الرابع',
        nameAr: 'الفصل الدراسي الرابع',
        terms: [
          {
            id: 'it-s4-t1',
            name: 'الترم الأول',
            nameAr: 'الترم الأول',
            subjects: [
              { id: 'it-s4-t1-1', name: 'تقنيات الحاسوب المستقبلية', nameAr: 'تقنيات الحاسوب المستقبلية', driveLink: 'https://drive.google.com/drive/folders/it7abc123' },
              { id: 'it-s4-t1-2', name: 'إدارة مشاريع التقنية', nameAr: 'إدارة مشاريع التقنية', driveLink: 'https://drive.google.com/drive/folders/it7def456' },
              { id: 'it-s4-t1-3', name: 'الحوكمة الرقمية', nameAr: 'الحوكمة الرقمية', driveLink: 'https://drive.google.com/drive/folders/it7ghi789' },
              { id: 'it-s4-t1-4', name: 'تطوير المنتجات التقنية', nameAr: 'تطوير المنتجات التقنية', driveLink: 'https://drive.google.com/drive/folders/it7jkl012' },
              { id: 'it-s4-t1-5', name: 'الحوسبة الطرفية', nameAr: 'الحوسبة الطرفية', driveLink: 'https://drive.google.com/drive/folders/it7mno345' },
              { id: 'it-s4-t1-6', name: 'تطوير المنصات الرقمية', nameAr: 'تطوير المنصات الرقمية', driveLink: 'https://drive.google.com/drive/folders/it7pqr678' },
              { id: 'it-s4-t1-7', name: 'الأمن الإلكتروني المتقدم', nameAr: 'الأمن الإلكتروني المتقدم', driveLink: 'https://drive.google.com/drive/folders/it7stu901' },
              { id: 'it-s4-t1-8', name: 'مشروع التخرج 2', nameAr: 'مشروع التخرج 2', driveLink: 'https://drive.google.com/drive/folders/it7vwx234' },
              { id: 'it-s4-t1-9', name: 'المدن الذكية', nameAr: 'المدن الذكية', driveLink: 'https://drive.google.com/drive/folders/it7yz567' },
              { id: 'it-s4-t1-10', name: 'ريادة الأعمال التقنية', nameAr: 'ريادة الأعمال التقنية', driveLink: 'https://drive.google.com/drive/folders/it7abc890' }
            ]
          },
          {
            id: 'it-s4-t2',
            name: 'الترم الثاني',
            nameAr: 'الترم الثاني',
            subjects: [
              { id: 'it-s4-t2-1', name: 'التدريب الصناعي', nameAr: 'التدريب الصناعي', driveLink: 'https://drive.google.com/drive/folders/it8abc123' },
              { id: 'it-s4-t2-2', name: 'إدارة الجودة في التقنية', nameAr: 'إدارة الجودة في التقنية', driveLink: 'https://drive.google.com/drive/folders/it8def456' },
              { id: 'it-s4-t2-3', name: 'التطوير المستمر', nameAr: 'التطوير المستمر', driveLink: 'https://drive.google.com/drive/folders/it8ghi789' },
              { id: 'it-s4-t2-4', name: 'الابتكار التقني', nameAr: 'الابتكار التقني', driveLink: 'https://drive.google.com/drive/folders/it8jkl012' },
              { id: 'it-s4-t2-5', name: 'الحوسبة المستدامة', nameAr: 'الحوسبة المستدامة', driveLink: 'https://drive.google.com/drive/folders/it8mno345' },
              { id: 'it-s4-t2-6', name: 'تطوير الخدمات الرقمية', nameAr: 'تطوير الخدمات الرقمية', driveLink: 'https://drive.google.com/drive/folders/it8pqr678' },
              { id: 'it-s4-t2-7', name: 'المسؤولية الرقمية', nameAr: 'المسؤولية الرقمية', driveLink: 'https://drive.google.com/drive/folders/it8stu901' },
              { id: 'it-s4-t2-8', name: 'عرض مشروع التخرج', nameAr: 'عرض مشروع التخرج', driveLink: 'https://drive.google.com/drive/folders/it8vwx234' },
              { id: 'it-s4-t2-9', name: 'التسويق الرقمي', nameAr: 'التسويق الرقمي', driveLink: 'https://drive.google.com/drive/folders/it8yz567' },
              { id: 'it-s4-t2-10', name: 'التطوير المهني', nameAr: 'التطوير المهني', driveLink: 'https://drive.google.com/drive/folders/it8abc890' }
            ]
          }
        ]
      }
    ]
  }
];