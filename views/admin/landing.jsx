import React from "react"


export default function AdminLanding(){
    return (
        <div>
            <a href="/admin/year/1">Year 1</a><br/>
            <a href="/admin/year/2">Year 2</a><br/>
            <a href="/admin/year/3">Year 3</a><br/>
            <a href="/admin/year/4">Year 4</a><br/>
            <a href="/admin/placementreports">Past reports</a><br/>
            <a href="/admin/newplacement">New application</a><br/>
            <a href="/admin/announce">Announce something</a><br/>
            <a href="/admin/companysearch">Company Details</a><br/>
            <form method="POST" encType="multipart/form-data">
                Update Database<br/>
                <input
                    type="file"
                    placeholder="placeholder"
                    id="myfile"
                    name="newdb"                  />
                <input type="submit"/> <br/>

            </form>
            
        </div>
    )
}