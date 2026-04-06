"use client";

import { useEffect, useState } from "react";
import styles from "./blogs.module.scss";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    image: "",
    // blocks: [],
  });

  const [blocks, setBlocks] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);

  const loadBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file) => {
    if (!file) return "";

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return "";
    }

    return data.imageUrl || "";
  };

const addBlock = (type) => {
  setBlocks((prev) => [
    ...prev,
    {
      id: `${Date.now()}-${Math.random()}`,
      type,
      value: "",
      preview: "",
      file: null,
    },
  ]);
};

const updateBlockValue = (id, value) => {
  setBlocks((prev) =>
    prev.map((b) =>
      b.id === id ? { ...b, value } : b
    )
  );
};

 const handleBlockImageChange = (id, e) => {
  const file = e.target.files[0];
  if (!file) return;

  const localPreview = URL.createObjectURL(file);

  setBlocks((prev) =>
    prev.map((block) =>
      block.id === id
        ? { ...block, file, preview: localPreview }
        : block
    )
  );
};



const removeBlock = (id) => {
  setBlocks((prev) => prev.filter((b) => b.id !== id));
};




const moveBlock = (index, direction) => {
  setBlocks((prev) => {
    const arr = [...prev];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= arr.length) return prev;

    const item = arr[index];

    arr.splice(index, 1);
    arr.splice(newIndex, 0, item);

    return arr;
  });
};




  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let imagePath = form.image;

    if (selectedFile) {
      imagePath = await uploadImage(selectedFile);
      if (!imagePath) {
        setUploading(false);
        return;
      }
    }

    const processedBlocks = [];

    for (const block of blocks) {
      if (block.type === "image") {
        let imageValue = block.value;

        if (block.file) {
          imageValue = await uploadImage(block.file);
          if (!imageValue) {
            setUploading(false);
            return;
          }
        }

        processedBlocks.push({
          id: block.id,
          type: "image",
          value: imageValue,
        });
      } else {
        processedBlocks.push({
          id: block.id,
          type: block.type,
          value: block.value,
        });
      }
    }

    const method = form.id ? "PUT" : "POST";

    await fetch("/api/blogs", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        image: imagePath,
        blocks: processedBlocks,
      }),
    });

    resetForm();
    await loadBlogs();
    setUploading(false);
  };

const editBlog = (blog) => {
  let parsedBlocks = [];

  try {
    parsedBlocks =
      typeof blog.blocks === "string"
        ? JSON.parse(blog.blocks)
        : blog.blocks || [];
  } catch {
    parsedBlocks = [];
  }

  setForm({
    id: blog.id,
    title: blog.title || "",
    description: blog.description || "",
    image: blog.image || "",
  });

  setBlocks(
    parsedBlocks.map((block, index) => ({
      id: `${block.id || Date.now()}-${index}`,
      type: block.type,
      value: block.value,
      preview: block.type === "image" ? block.value : "",
      file: null,
    }))
  );
};
  const deleteBlog = async (id) => {
    await fetch("/api/blogs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadBlogs();
  };

 const resetForm = () => {
  setForm({
    id: null,
    title: "",
    description: "",
    image: "",
  });

  setSelectedFile(null);
  setPreview("");

  setBlocks([]); // 🔥 VERY IMPORTANT
};

  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Admin Blog Panel</h1>

          <button
            onClick={async () => {
              await fetch("/api/logout", { method: "POST" });
              window.location.href = "/admin/login";
            }}
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={4}
          />

          <input type="file" accept="image/*" onChange={handleFileChange} />

          {preview && (
            <div className={styles.preview}>
              <img src={preview} alt="Main preview" />
            </div>
          )}

          {/* BLOCK CHOOSER */}
          <div className={styles.blockChooser}>
            <button
              type="button"
              className={styles.widgetCard}
              onClick={() => addBlock("text")}
            >
              <strong>Text Block</strong>
              <span>Add another text section</span>
            </button>

            <button
              type="button"
              className={styles.widgetCard}
              onClick={() => addBlock("image")}
            >
              <strong>Image Block</strong>
              <span>Add another image section</span>
            </button>

            <button
              type="button"
              className={styles.widgetCard}
              onClick={() => addBlock("code")}
            >
              <strong>Code Block</strong>
              <span>Add code snippet section</span>
            </button>
          </div>

          {/* DYNAMIC BLOCKS */}
          <div className={styles.blocksArea}>
            {blocks.map((block, index) => (
  <div key={block.id}>
                <div className={styles.blockTop}>
                  <h4>
                    {block.type === "text" && "Text Block"}
                    {block.type === "image" && "Image Block"}
                    {block.type === "code" && "Code Block"}
                  </h4>

                  <div className={styles.blockControls}>
                    <button
                      type="button"
                      onClick={() => moveBlock(index, -1)}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => moveBlock(index, 1)}
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => removeBlock(block.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {block.type === "text" && (
                  <textarea
                    placeholder="Write text content..."
                    rows={5}
                    value={block.value}
                    onChange={(e) =>
                      updateBlockValue(block.id, e.target.value)
                    }
                  />
                )}

                {block.type === "code" && (
                  <textarea
                    className={styles.codeBlock}
                    placeholder="Paste code snippet..."
                    rows={6}
                    value={block.value}
                    onChange={(e) =>
                      updateBlockValue(block.id, e.target.value)
                    }
                  />
                )}

                {block.type === "image" && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBlockImageChange(block.id, e)}
                    />

                    {block.preview && (
                      <div className={styles.preview}>
                        <img src={block.preview} alt="Block preview" />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.primary} type="submit">
              {uploading
                ? "Uploading..."
                : form.id
                ? "Update Blog"
                : "Add Blog"}
            </button>

            {form.id && (
              <button
                type="button"
                className={styles.secondary}
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className={styles.grid}>
          {blogs.map((b) => (
            <div key={b.id} className={styles.card}>
              {b.image && <img src={b.image} alt={`${b.title} - ZNR blog on fintech, retail and cybersecurity`} />}

              <h3>{b.title}</h3>
              <p>{b.description}</p>

              <div className={styles.cardActions}>
                <button
                  className={styles.edit}
                  onClick={() => editBlog(b)}
                >
                  Edit
                </button>

                <button
                  className={styles.delete}
                  onClick={() => deleteBlog(b.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}