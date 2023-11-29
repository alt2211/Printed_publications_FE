import { Button, Form, Input, notification } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Settings = () => {
    const [page, setPage] = useState<string>('settings')

    return(
        <>
        <p>Приветик</p>
        </>
    )
}

export default Settings