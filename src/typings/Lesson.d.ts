export interface ILesson {
    beginLesson: string;
    createddate: string;
    date: string;
    discipline: string;
    endLesson: string;
    kindOfWork?: string;
    lecturer?: string;
    modifieddate?: string;
    stream?: string;
    building: string;
    dayOfWeek: number;
    dayOfWeekString: string;
    lecturerOid?: number;
    auditoriumOid: number;
    disciplineOid?: number;
    auditorium: string;
    stream_id: number;
    date_moment: string;
    date_iso: string;
    date_start: number;
    date_end: number;
    date_at: number;
    created_at: number;
    updated_at?: number;
    _type: string | null;
    importance_level: number;
    building_id: number;
    city: string;
    duration: number[];
    type?: string;
    isBan?: boolean;
    subGroup?: string;
}
