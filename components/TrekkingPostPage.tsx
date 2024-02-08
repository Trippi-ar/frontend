import React from 'react';

interface ActivityData {
    name: string;
    difficulty: string;
    distance: number;
    duration: number;
    languages: string[];
    type: string;
    full_address: string;
    description: string;
    tools: string;
}
interface TrekkingPostPageProps {
    activityData: ActivityData;
}

const TrekkingPostPage: React.FC<TrekkingPostPageProps> = ({ activityData }) => {

    return (
        <div>
            <div className="max-w-3xl mx-auto rounded-lg shadow-md p-6">
                <h1 className="text-3xl mb-4">{activityData.full_address}</h1>
                <div className="mb-4 flex flex-wrap">
                    <div className="w-1/2 pr-4">
                        <p><strong>Dificultad</strong> {activityData.difficulty}</p>
                        <p><strong>Distancia</strong> {activityData.distance}</p>
                        <p><strong>Duración</strong> {activityData.duration}</p>
                    </div>
                    <div className="w-1/2">
                        <p><strong>Tipo de actividad</strong> {activityData.type}</p>
                        <p><strong>Lenguaje</strong> {activityData.languages}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto  rounded-lg  p-6 mt-4">
                <h2 className="text-3xl mb-4">Información adicional</h2>
                <p>{activityData.description}</p>
                <h2 className="text-3xl mt-8 mb-4">Cosas que llevar</h2>
                <p>{activityData.tools}</p>
            </div>
        </div>
)
    ;
};

export default TrekkingPostPage;
