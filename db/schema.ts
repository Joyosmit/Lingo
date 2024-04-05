import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses",{
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull()
})

// many-to-many relation
export const courseRelations = relations(courses, ({many})=>({
    userProgress: many(userProgress),
    units: many(units)
}))

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId: integer("active_course_id").references(()=>courses.id, {onDelete: "cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0)
})

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // Ex - Unit 69
    description: text("description").notNull(), // Ex - Learn the starters of Croatian
    courseId: integer("course_id").references(()=> courses.id,{onDelete:"cascade"}).notNull(),
    order: integer("order").notNull()
})

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    unitId: integer("unit_id").notNull().references(()=>units.id, {onDelete:"cascade"}),
    order: integer("order").notNull()
})

export const lessonRelations = relations(lessons, ({one, many})=>({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id]
    })
}))

// Not yet written the xport keyword
export const unitRelations = relations(units, ({many, one})=>({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id]
    }),
    lesson: many(lessons)
}))

export const userProgressRelations = relations(userProgress, ({one})=>({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id]
    })
}))