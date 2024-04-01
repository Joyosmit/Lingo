import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./list"


const page = async() => {
    const coursesData = getCourses()
    const userProgressData = getUserProgress()
    const [courses, userProgress] = await Promise.all([coursesData, userProgressData])
    return (
        <div className="h-full max-w-[912px] mx-auto px-3">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <List
            courses={courses}
            activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    )
}

export default page