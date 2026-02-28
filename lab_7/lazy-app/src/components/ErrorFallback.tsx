type Props = {
    title?: string;
};

export default function ErrorFallback({title = "Something went wrong"}: Props){
    return (
        <div>
            <h2>{title}</h2>
            <p>Failed to load page or the page crashed</p>
            <p>Click "Try Again" to retry</p>
        </div>
    )
}