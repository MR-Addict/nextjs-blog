function mapCourse(course) {
  const uri = new URL(course.uri);

  return {
    id: course.id,
    title: course.title,
    startTime: course.startTime,
    endTime: course.endTime,
    uri: course.uri,
    cover: course.cover,
    screenshot: uri.origin + uri.pathname.split("/").slice(0, -1).join("/") + "/images/end.jpg",
  };
}


export default async function handler(req, res) {
  try {
    const response = await fetch("https://qczj.h5yunban.com/qczj-youth-learning/cgi-bin/common-api/course/current").then(res => res.json());
    return res.status(200).json({ status: true, data: mapCourse(response.result) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Cannot get nqdxx data" });
  }
}
