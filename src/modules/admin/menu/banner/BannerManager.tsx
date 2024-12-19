import * as React from "react";
import { IQueryUser } from "../../../../types/user.types";

export default function BannerManager() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<Partial<IQueryUser>>({
    page: 1,
    limit: 5,
    nameLike: "",
  });

  return (
    <>
      {/* <div className="flex flex-col justify-start items-start space-y-5 w-full">
        <h1 className="font-bold text-2xl">Danh sách ảnh bìa trang chủ</h1>
        {loading ? (
          <Spin />
        ) : (
          <div className="w-full">
            <Table<IRoom>
              rowKey="id"
              className="hover:cursor-pointer"
              columns={columns}
              onRow={(record) => ({
                onClick: () => handleClickRow(record),
              })}
              dataSource={roomList}
              pagination={{
                current: query.page,
                pageSize: query.limit,
                total: query.total,
                onChange: (page, limit) => {
                  handleGetRoomList({
                    ...query,
                    page,
                    limit,
                  });
                },
              }}
            />
          </div>
        )}
      </div> */}
    </>
  );
}
