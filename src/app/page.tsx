// import Image from "next/image";;
import HomeSide from "@/components/home/home"

export default function Home() {
  return (
    <div className="h-full">
      <div className="lg:hidden flex">
        <HomeSide view={true}/>
      </div>
    </div>
  )
}
