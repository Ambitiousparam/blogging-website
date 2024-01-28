export type UserType ={
    name:string,
    email:string,
    id:string,
    blogs:Blogtype[],
    comments:Commentstype[], 
};

export type Blogtype = {
    id:string,
    title:string,
    content:string,
    date:Date,
    user:UserType,
    comments:Commentstype[],
};

export type Commentstype ={
    text:string,
    date:Date,
    blog:Blogtype,
    user:UserType,

}

