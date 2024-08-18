const user = {
    "success": true,
    "token": "",
    "user": {
        "id": 1,
        "password": "pbkdf2_sha256$720000$pr5KUrOCFYBMYqAst3Ie9k$/ab+ObnUwaHZPAZvGw4owGLVzRQByJCKwg7SNmIOem0=",
        "last_login": "2024-07-24T05:53:22.427176Z",
        "is_superuser": true,
        "username": "admin",
        "first_name": "",
        "last_name": "",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2024-06-20T15:27:16.340455Z",
        "image": null,
        "email": "admin@gmail.com",
        "phone": "",
        "groups": [],
        "user_permissions": []
    }
}

export type registerPost = {
    "email": string,
    "password": string,
    "phone": string,
}

export type otpPost = {
    "otp": string
}


export type UnpaidCourse = {
    id: number,
    name: string,
    image: string,
    description: string,
    content: string
} & Course

export interface Course {
    id: number;
    name: string;
    batch_type: string;
    description: string;
    content: string;
    students: Array<number>;  // Assuming students are represented by user IDs
    starting_date: string;  // ISO date string (e.g., "2024-08-13")
    ending_date: string;  // ISO date string
    teaching_time_start?: string | null;  // ISO datetime string or null
    teaching_time_end?: string | null;  // ISO datetime string or null
    registration_fees?: number | null;
    image: string;  // URL to the uploaded image
    recording_sessions?: Array<number>;  // Assuming sessions are represented by session IDs
    refunded: boolean;
}

interface Pager {
    count: number | null,
    next: number | null,
    previous: number | null,
}

export interface Installment {
    id: number;
    course: number;  // Assuming the course is represented by its ID (ForeignKey)
    user: Array<number>;  // Assuming users are represented by their IDs (ManyToManyField)
    date: string;  // ISO datetime string (e.g., "2024-08-13T12:34:56Z")
    price?: number | null;
    installment_number: string;
    paid: boolean;
}

export type courseRepo = Pager & {
    results: UnpaidCourse[] | Course[]
}

export type SingleCourseResp = { paid: boolean, data: UnpaidCourse, installment: Installment[] }

export type loginResp = typeof user;