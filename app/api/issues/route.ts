import { NextRequest, NextResponse as response } from "next/server";
import {z} from 'zod';
import connect from "../connectdb";
//import {IssueTrack} from "../../model/Issue"

const {IssueTrack} = require("../../model/Issue")



const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})
export async function POST(request: NextRequest){
    
    await connect();   
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success)
        return response.json(validation.error.errors, {status: 400});
    
    const newIssue = await new IssueTrack({title: body.title, description: body.description})
    newIssue.save()
    return response.json(newIssue, {status:201})
    
}