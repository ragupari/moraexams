import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { integer, sqliteTable, text, numeric } from "drizzle-orm/sqlite-core";

export const applicants = sqliteTable("tbl_students", {
	id: text("index_no", { length: 50, mode: "text" }).notNull(),
	name: text("name", { length: 255, mode: "text" }),
	// email: text("email", { length: 255, mode: "text" }),
	nic: text("nic", { length: 15, mode: "text" }).notNull(),
	centre_id: text("centre_id", { length: 100, mode: "text" }).notNull(),
	district_ranking: text("district_ranking", { length: 255 }).notNull(),
	sub_grp_id: text("subject_group_id", { mode: "text" }),
});

export const results = sqliteTable("tbl_final_results", {
	id: text("index_no", { length: 50, mode: "text" }).notNull(),
	// zscore: numeric("zscore"),
	sub1: text("subject1", { mode: "text" }),
	sub1_result: text("subject1_result", { mode: "text" }),
	sub2: text("subject2", { mode: "text" }),
	sub2_result: text("subject2_result", { mode: "text" }),
	sub3: text("subject3", { mode: "text" }),
	sub3_result: text("subject3_result", { mode: "text" }),
	island_rank: integer("island_rank"),
	district_rank: integer("district_rank"),
});

export const examCentres = sqliteTable("tbl_exam_centres", {
	centre_id: integer("centre_id").notNull(),
	centre_name: text("centre_name", {
		mode: "text",
		length: 255,
	}).notNull(),
	// "district_id"	integer NOT NULL,
	// "place"	varchar(50) NOT NULL,
	// "gender"	varchar(50) DEFAULT NULL
});

// export type Applicant = {
// 	id: string;
// 	name: string;
// 	email: string;
// 	nic: string;
// };

// insecure implementation. find a way to initiate the client on server side and use in in client side.
export const client = createClient({
	url: import.meta.env.TURSO_DATABASE_URL,
	authToken: import.meta.env.TURSO_DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {
	schema: { applicants, results, examCentres },
});
