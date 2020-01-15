import React from 'react';

import AdminNav from "./AdminNav";
import EquipmentList from "./EquipmentList";
import AddEquipmentForm from './AddEquipmentForm';

export default function ManageEquipment(props) {
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="list">
                <h1>
                    Manage Equipment
                </h1>
                <div>
                    <h2>
                        Add Equipment
                    </h2>
                    <AddEquipmentForm />
                </div>
                <div>
                    <h2>
                        Equipment List
                    </h2>
                    <EquipmentList />
                </div>
            </div>
        </div>
    );
}