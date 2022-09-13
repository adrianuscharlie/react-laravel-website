import React from "react";

export default function Social(props){
    return (
        <a href={props.url} rel='social media' target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center 
        items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            <svg className="fill-current" role="img" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{props.name}</title><path d={props.path}/></svg>
        </a>
    )
}