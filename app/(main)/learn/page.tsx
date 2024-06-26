import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/user-progress"
import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"

const page = async() => {
    const userProgressData = getUserProgress();
    const [userProgress] = await Promise.all([userProgressData]);
    if(!userProgress || !(userProgress.activeCourseId)){
        redirect("/courses")
    }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                //@ts-ignore
                activeCourse = {userProgress.activeCourse}
                hearts = {userProgress.hearts}
                points = {userProgress.points}
                hasActiveSubscription = {false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header
                //@ts-ignore
                title={userProgress.activeCourse.title}/>
                
            </FeedWrapper>
        </div>
    )
}

export default page
